import * as fs from "fs";
import { Booking, BookingStore } from "../core/BookingStore";

/** One booking, as Facilities' tools write it. */
interface BookingRecord {
	room: string;
	student: string;
	date: string;
	startTime: string;
	endTime: string;
}

/**
 * Keeps bookings in a JSON file that Facilities' other tools read too, so it uses their field names.
 * Translates between the core's BookingStore and Node's fs.
 */
export class JsonBookingStore implements BookingStore {
	constructor(private file: string) {}

	bookingsFor(room: string, date: string): Booking[] {
		// TODO: read the records from this.file, and return the ones for room on date as Bookings
        const bookings: BookingRecord[] = JSON.parse(fs.readFileSync(this.file, "utf8"));
        const actuals: Booking[] = [];
        for (const booking of bookings) {
            if (booking.room === room && booking.date === date) {
                actuals.push({room: booking.room,
                    student: booking.student,
                    date: booking.date,
                    start: booking.startTime,
                    end: booking.endTime,
                });
            }
        }
		return actuals;
	}

	add(booking: Booking): void {
		// TODO: read the records from this.file, add booking as a record, and write them all back
		throw new Error("not implemented");
	}
}
