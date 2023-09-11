import { jsonApi } from "@/api";
import { Comment } from "@/interfaces/comment.interface";

export async function getCommentsByPostId(id: number) {
    try {
        const { data } = await jsonApi.get<Comment[]>(`/posts/${id}/comments`)
        return data;
    }catch (error: any) {
        throw new Error('error en la peticion', error)
    }
}