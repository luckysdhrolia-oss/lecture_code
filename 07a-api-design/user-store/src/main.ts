import { User, UserStore } from "./UserStore";

/** only calls add() if the user has a unique email in the system.
 * return true/false based on if the user was successfully added
 */
function addIfAbsent(store: UserStore, user: User): boolean {
	// TODO: implement
    if (store.find(user.id)?.email === user.email) {
        return false;
    } else {
        store.add(user);
        return store.lastOperationSucceeded;
    }
}

/** updates the user with `id` to have the `newEmail`. */
function updateEmail(store: UserStore, id: string, newEmail: string) {
    let user = store.find(id, "");
    if (user) {
        user.email = newEmail;
    }
}
