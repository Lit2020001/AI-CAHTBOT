import {connect, disconnect} from "mongoose";

export async function connectToDatabase() {
    try{
        await connect(process.env.MONGODB_URL);
        console.log("database connected");
    } catch(error) {
        console.log(error);
        throw new Error("Cannot connect to mongo db");
    }
}

 export async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error); 
        throw new Error("Could not disconnect from database");
    }
    
 }