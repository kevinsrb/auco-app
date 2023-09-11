import { Suspense } from "react";

import { CommentByPost } from "@/components/CommentByPost";
import { getAllPosts, getPostById } from "@/lib";
import { Loading } from "@/components/Loading";
import { Post } from "@/interfaces/post.interface";
  
interface Props {
    params: {
        id: number;
    };
}

const PostPage = async ({params}: Props) => {
  const post = await getPostById(params.id)
    
  return (
    <>
      <p className="text-blue-700 text-sm font-bold uppercase pb-4">Post</p>
      <p className="text-3xl font-bold hover:text-gray-700 pb-4">
        {post.title}
      </p>

      <p className="pb-6">
        {post.body}
      </p>

      <Suspense fallback={ <Loading />} >
        <CommentByPost id={post.id} key={post.id}/>
      </Suspense>
    </>
  )
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
   
    return posts.map((post: Post) => ({
      id: post.id.toString(),
    }))
}
   

export default PostPage;