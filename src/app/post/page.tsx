import { getAllPosts } from '@/lib';
import  PostCard  from '../../components/PostCard';

const  PostsPage  = async() => {

  const posts = await getAllPosts();

 return <div className="flex flex-wrap justify-center mt-10">
    {posts.map(post => (
        <PostCard post={post} key={post.id} />
    ))}
  </div>;

}


export default PostsPage;

