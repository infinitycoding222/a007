import { Listener } from "discord-akairo";

export default class ReadyListener extends Listener {
    public constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    public exec(): void {
        console.log(`${this.client.user.tag} is online and ready`);
        this.client.user.setActivity(`:?help`, { type: "LISTENING" })
    }
}