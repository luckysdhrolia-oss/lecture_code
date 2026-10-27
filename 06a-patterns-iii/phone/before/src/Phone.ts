import { OffState } from "./OffState";
import { PhoneState } from "./PhoneState";

export class Phone {
	//private state: "off" | "locked" | "ready" = "off";
	private state: PhoneState = new OffState(this);

	constructor(public fingerprint: string) {}

	setState(state: PhoneState): void {
		this.state = state;
	}

	pressPower(): void {
        this.state.pressPower();
		// switch (this.state) {
		// 	case "off":
		// 		console.log("  Powering on.");
		// 		this.state = "locked";
		// 		break;
		// 	case "locked":
		// 		// TODO: A locked phone powers off when Power is pressed.
		// 		console.log("  Powering off.");
		// 		this.state = "off";
		// 		break;
		// 	case "ready":
		// 		console.log("  Powering off.");
		// 		this.state = "off";
		// 		break;
		// }
	}

	pressHome(finger: string): void {
        this.state.pressHome(finger);
		// switch (this.state) {
		// 	case "off":
		// 		console.log("  Powering on.");
		// 		this.state = "locked";
		// 		break;
		// 	case "locked":
		// 		if (this.fingerprint == finger) {
		// 			console.log("  Unlocked");
		// 			this.state = "ready";
		// 		} else {
		// 			console.log("  FingerPrint unrecognizable");
		// 		}
		// 		break;
		// 		// TODO: A locked phone unlocks if the finger matches its fingerprint,
		// 		// and says "Fingerprint not recognized." if it doesn't.
		// 		break;
		// 	case "ready":
		// 		console.log("  Going to the home screen.");
		// 		break;
		// }
	}

	receiveNotification(app: string, text: string): void {
        this.state.receiveNotification(app, text);
	// 	switch (this.state) {
	// 		case "off":
	// 			console.log(`  Missed a notification from ${app}: the phone is off.`);
	// 			break;
	// 		case "locked":
	// 			console.log(`  New  notification from ${app}`);
	// 			break;
	// 		case "ready":
	// 			console.log(`  🔔 ${app}: ${text}`);
	// 			break;
	// 	}
	// }
}
}
