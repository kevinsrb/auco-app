import PostCard from "@/components/PostCard";
import { Post } from "@/interfaces/post.interface";
import { getAllPosts, getPostById } from "@/lib";
  
interface Props {
    params: {
        id: number;
    };
}

const PostPage = async ({params}: Props) => {
  const post = await getPostById(params.id)
    
  return (
      <PostCard post={post} key={post.id} />
  )
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
   
    return posts.map((post: Post) => ({
      id: post.id.toString(),
    }))
}
   

export default PostPage;