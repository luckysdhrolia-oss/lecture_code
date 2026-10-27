export interface User {
	id: string;
	name: string;
	email: string;
}


export interface UserStore {
	/* list of users, sorted by email */
	// users: User[];
	/* a boolean indicating if the last mutable operation succeeded */
	// lastOperationSucceeded: boolean;

	/**
	 * Adds a user to the store.
     * If a user with the same email already esxists, the store is unchanged.
	 * Assigns a random id to the user if successfully created, overriding the provided one.
     * @returns the user that was created if successful, or null if failed. 
	 */
	add(u: User): User | null;

	/**
	 * Returns the user with the given id, or null if not found.
	 */
	find(id: string, mode: "id" | "email"): User | null;

	/**
	 * Deletes the user with the given id.
	 * If no such user exists, the store is unchanged.
	 */
	delete(id: string): boolean;

    /**
     * updates the user matching u.id to id in the system
     */
    update(u: User): boolean;
}
