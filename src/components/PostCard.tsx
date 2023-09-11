import { Post } from "@/interfaces/post.interface";
import Link from "next/link";

interface Props {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <Link key={post.id}
    className="bg-white flex flex-col justify-start p-6"
      href={`/post/${post.id}`}
    >

      <p className="text-blue-700 text-sm font-bold uppercase pb-4">Post</p>
      <p className="text-3xl font-bold hover:text-gray-700 pb-4">
        {post.title}
      </p>

      <p className="pb-6">
        {post.body}
      </p>



    </Link>
  );
}

export default PostCard;
