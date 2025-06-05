import mongoose, { Document, Model } from "mongoose";

export interface IUser {
    firstName: String,
    lastName: String,
    userId: String,
    profilePhoto?: String,
    bio?: String,


}

export interface IUserDocument extends IUser, Document {
    createdAt: Date,
    updatedAt: Date
}
const userSchema = new mongoose.Schema<IUserDocument>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true

    },
    userId: {
        type: String,
        required: true

    },
    profilePhoto: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    }
}, { timestamps: true })

export const User: Model<IUserDocument> = mongoose.models?.User || mongoose.model<IUserDocument>('User', userSchema);