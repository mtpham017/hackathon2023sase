import { connect, isConnected } from "$lib/database";

export const load = () => {

    if(!isConnected) {
        connect();
    } 

};
