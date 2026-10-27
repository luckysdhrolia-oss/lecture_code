import { PhoneState } from "./PhoneState";
import { Phone } from "./Phone";

export class ReadyState implements PhoneState {
    constructor (phone: Phone) {}
    
    pressPower(): void {
        throw new Error("Method not implemented.");
    }
    pressHome(finger: String): void {
        throw new Error("Method not implemented.");
    }
    receiveNotification(app: string, text: string): void {
        throw new Error("Method not implemented.");
    }

}