export interface PhoneState {
	pressPower(): void;
	pressHome(finger: String): void;
	receiveNotification(app: string, text: string): void;
}
