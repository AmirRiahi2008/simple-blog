import Post from '@/components/post';
import posts from '@/db.json';
import { notFound } from 'next/navigation';

export default function PostsDetails({ params }) {
  const postSlug = params.slug;
  const post = posts.find(post => post.slug === postSlug);

  if (!post) notFound();

  return <Post data={post} />;
}
