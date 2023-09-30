import type { Session } from 'svelte-kit-cookie-session';

type SessionData = {
    email: string
};

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
                    session: Session<SessionData>
                }
		interface PageData {
                    session: SessionData
                }
		// interface Platform {}
	}
}

export {};
