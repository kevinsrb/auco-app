import { getAllPosts } from '@/lib';
import  PostCard  from '../../components/PostCard';

const  PostsPage  = async() => {

  const posts = await getAllPosts();

 return <div className="grid gap-4 grid-cols-4">
    {posts.map(post => (
        <PostCard post={post} key={post.id} />
    ))}
  </div>;

}


export default PostsPage;

