import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HOSPITAL MANAGEMENT MERN"
    })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(`error while connecting to database: ${err}`);
    })
}

