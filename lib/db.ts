import mongoose from 'mongoose';


const connectDb = async () => {

    try {

        const connected = await mongoose.connect(process.env.MONGO_URL!);
        if (connected) {
            console.log('DB Connected')
        }
    } catch (error) {
        console.error(error)
        console.log('error while connecting to db')

    }
}
export default connectDb