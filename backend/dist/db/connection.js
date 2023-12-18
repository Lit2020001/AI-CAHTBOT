"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
async function connectToDatabase() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGODB_URL);
        console.log("database connected");
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to mongo db");
    }
}
exports.connectToDatabase = connectToDatabase;
async function disconnectFromDatabase() {
    try {
        await (0, mongoose_1.disconnect)();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from database");
    }
}
exports.disconnectFromDatabase = disconnectFromDatabase;
//# sourceMappingURL=connection.js.map