import { PhoneState } from "./PhoneState";
import { Phone } from "./Phone";


export class LockedState implements PhoneState {
    constructor (private phone: Phone) {}

    pressPower(): void {
        console.log("  Powering off.");
    }
    pressHome(finger: String): void {
        if (this.phone.fingerprint == finger) {
            console.log("  Unlocked");
            //this.state = "ready";
        } else {
            console.log("  FingerPrint unrecognizable");
        }
        throw new Error("Method not implemented.");
    }
    receiveNotification(app: string, text: string): void {
        throw new Error("Method not implemented.");
    }

}