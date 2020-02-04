import { ConnectionManager } from "typeorm"
import { Settings } from "../models/Settings"
import { databaseName } from "../Config"

const connectionManager = new ConnectionManager()
connectionManager.create({
    name: databaseName,
    type: "sqlite",
    database: "./db.sqlite",
    entities: [
        Settings
    ]
})

export default connectionManager;