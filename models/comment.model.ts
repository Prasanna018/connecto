import mongoose, { Document } from "mongoose";
import { IUser } from "./user.model";

export interface IComment {
    textMessage: string,
    user: IUser
}

export interface ICommentDocuments extends IComment, Document {
    createdAt: Date,
    updatedAt: Date
}

const CommentSchema = new mongoose.Schema<ICommentDocuments>({
    textMessage: {
        type: String,
        required: true
    },
    user: {
        userId: {
            type: String,
            required: true

        },
        profilePhoto: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }

    },


}, { timestamps: true });

export const Comment = mongoose.models?.Comment<ICommentDocuments> || mongoose.model<ICommentDocuments>('comment', CommentSchema)