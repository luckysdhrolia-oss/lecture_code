import { PhoneState } from "./PhoneState";
import { Phone } from "./Phone";
import { LockedState } from "./LockedState";

export class OffState implements PhoneState {
    constructor (private phone: Phone) {}

    pressPower(): void {
        console.log("  Powering on.");
        this.phone.setState(new LockedState(this.phone));
    }
    pressHome(finger: String): void {
        console.log("  Powering on.");
    }
    receiveNotification(app: string, text: string): void {
        console.log(`  Missed a notification from ${app}: the phone is off.`);
    }

}