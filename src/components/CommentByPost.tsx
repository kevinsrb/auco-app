import Image from "next/image";
import { Comment } from "../interfaces/comment.interface";
import { getCommentsByPostId } from "@/lib/getCommentsByPostId";

interface Props {
    id: number
}

export const CommentByPost = async ({ id }: Props) => {
    const comments = await getCommentsByPostId(id)
    return (

        <>
            <div className="w-full bg-white rounded-lg border p-2 my-4 mx-6">
                <h3 className="font-bold">Comentarios</h3>

                {comments.map((comment: Comment) => (
                    

                    <div className="flex flex-col">
                        <div className="border rounded-md p-3 ml-3 my-3">
                            <div className="flex gap-3 items-center">

                                <Image
                                    src="https://www.svgrepo.com/show/530585/user.svg"
                                    alt="Picture of the user"
                                    width={30}
                                    height={30}
                                />
                                <h3 className="font-bold">
                                    {comment.name}
                                </h3>
                            </div>
                            <p className="text-gray-600 mt-2">
                                {comment.body}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </>

    )
}

