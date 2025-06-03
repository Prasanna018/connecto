import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ProfilePhoto from "./shared/ProfilePhoto"
import { Textarea } from "./ui/textarea"
import { Images } from "lucide-react"
import { useRef, useState } from "react"
import { readFileAsDataUrl } from "@/lib/readFileasUrl"
import Image from "next/image"


export function PostDialog({ setOpen, open, src }: { setOpen: any, open: boolean, src: string }) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [selectedFile, setSelectedFile] = useState<string>('');
    const fileHanderChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsDataUrl(file)
            setSelectedFile(dataUrl);
        }

    }
    console.log(selectedFile)
    return (
        <Dialog open={open}>

            {/* <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger> */}
            <DialogContent onInteractOutside={() => setOpen(false)} className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>
                        <ProfilePhoto src={src}></ProfilePhoto>
                        <div>
                            <h1>Prasanna Gaikwad</h1>
                        </div>
                    </DialogTitle>
                    {/* <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription> */}
                </DialogHeader>
                <form>
                    <div className="flex flex-col gap-2
                    ">
                        <div>
                            <Textarea
                                typeof="text"
                                placeholder="Write Your Post.."
                                id="name"
                                name="inputText"
                                className="border-none text-lg focus-visible:ring-1"
                            ></Textarea>
                        </div>
                        <div className="my-4">
                            {
                                selectedFile && (
                                    <Image
                                        src={selectedFile}
                                        alt="image"
                                        width={400}
                                        height={400}

                                    >

                                    </Image>
                                )
                            }

                        </div>


                    </div>


                    <DialogFooter>
                        <div className="my-4">
                            <Input
                                type="file"
                                accept="image/*"
                                className='hidden'
                                name="image"
                                ref={inputRef}
                                onChange={fileHanderChange}
                            >
                            </Input>

                        </div>
                        <DialogClose asChild>
                            <Button onClick={() => setOpen(false)} variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Post</Button>
                    </DialogFooter>
                </form >
                <Button
                    onClick={() => inputRef.current?.click()}
                    variant={'outline'} >
                    <Images className="text-blue-500"></Images>

                    <p className="mx-2">Media</p>
                </Button>
            </DialogContent>

        </Dialog >
    )
}
