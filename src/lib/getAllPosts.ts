import { jsonApi } from "@/api";
import { Post } from "@/interfaces/post.interface";

export async function getAllPosts() {
    try {
        const { data } = await jsonApi.get<Post[]>('/posts')
        return data;
    }catch (error: any) {
        throw new Error('error en la peticion', error)
    }
}