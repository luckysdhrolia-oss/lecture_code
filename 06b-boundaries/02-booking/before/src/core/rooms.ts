import { Booking, BookingStore } from "./BookingStore";

const MAX_MINUTES = 120;

function minutes(time: string): number {
	const [hours, mins] = time.split(":").map(Number);
	return hours * 60 + mins;
}

/**
 * Why request can't be booked, or undefined if it can.
 * others is every booking already made for the same room on the same day.
 */
export function refusalFor(request: Booking, others: Booking[]): string | undefined {
	// TODO: move the rules here from src/bookings.ts
    const length = minutes(request.end) - minutes(request.start);
	if (length <= 0) {
		return `Can't book: ${request.start}–${request.end} ends before it starts`;
	}
	if (length > MAX_MINUTES) {
		return `Can't book: a room can be booked for at most ${MAX_MINUTES / 60} hours`;
	}

    for (const other of others) {
		// two bookings overlap if each starts before the other ends; back-to-back is fine
		const sameRoom = other.room === request.room && other.date === request.date;
		if (sameRoom && minutes(request.start) < minutes(other.end) && minutes(other.start) < minutes(request.end)) {
			return `Can't book: ${request.room} is already booked ${other.start}–${other.end}`;
		}
	}
	return undefined;
}

/** Books request unless a rule refuses it. Returns why it was refused, or undefined if it was booked. */
export function book(store: BookingStore, request: Booking): string | undefined {
	// TODO: ask refusalFor() about the store's bookings for the same room and day,
	// and add request to the store if nothing refuses it
    const result = refusalFor(request, store.bookingsFor(request.room, request.date));
    if (result === undefined) {
        store.add(request);
    }
	return result;
}
