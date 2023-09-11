import { Post } from "@/interfaces/post.interface";
import Link from "next/link";

interface Props {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (


    <Link href={`post/${post.id}`} className="p-4 max-w-sm  hover:bg-gray-300">
   
      <div className="flex rounded-lg h-full bg-white-400 p-8 flex-col">
        <p className="text-blue-700 text-sm font-bold uppercase pb-4">Post</p>
        <div className="flex items-center mb-3">

          <h2 className="text-black text-lg font-medium"> {post.title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-gray">
            {post.body}
          </p>
        </div>
      </div>
    </Link>


  );
}

export default PostCard;
