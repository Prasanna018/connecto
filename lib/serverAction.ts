'use server'
import { v2 as cloudinary } from 'cloudinary';
import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server"
import connectDb from './db';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

export const createPostAction = async (inputText: string, selectedFile: string) => {
    const isConnected: any = await connectDb();
    if (isConnected) {
        console.log('db connected')
    }
    try {
        const user = await currentUser()
        if (!user) throw new Error('User not authenticated');
        if (!inputText) throw new Error('Input text is required!')
        const image = selectedFile;


        const userData: IUser = {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            userId: user.id,
            profilePhoto: user.imageUrl


        }

        let uploadResponse;

        if (image) {
            uploadResponse = await cloudinary.uploader.upload(image)
            await Post.create({
                description: inputText,
                user: userData,
                imageUrl: uploadResponse.secure_url, // from cloudinay 



            })

        } else {
            await Post.create({
                description: inputText,
                user: userData
            })

        }
    } catch (error) {

    }

}