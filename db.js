import mongoose from "mongoose";
import config from "./config/key.js";

const mongoURI = config.mongoURI;

function ConncetDB() {
    mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        ignoreUndefined: true
    })
    .then(() => console.log('mongoDB connection success'))
    .catch((err) => console.log(err));
}

mongoose.connection.on('error', (err) => {
    console.log('mongoDB Error occurred');
});

export default ConncetDB;