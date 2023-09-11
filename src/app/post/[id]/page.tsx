import { Suspense } from "react";

import { CommentByPost } from "@/components/CommentByPost";
import { getAllPosts, getPostById } from "@/lib";
import { Loading } from "@/components/loading";
import { Post } from "@/interfaces/post.interface";
import { PostCard } from "@/components/PostCard";
  
interface Props {
    params: {
        id: number;
    };
}

const PostPage = async ({params}: Props) => {
  const post = await getPostById(params.id)
    
  return (
    <>
      <PostCard post={post} key={post.id} />
      <Suspense fallback={ <Loading />} >
        <CommentByPost id={post.id}/>
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