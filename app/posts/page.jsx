import AllPosts from "@/components/allPosts";
import posts from "@/db.json";

export default function BlogsPage() {

  return (
    posts.map(post => <AllPosts
    data={post}
    />)
  );
}
