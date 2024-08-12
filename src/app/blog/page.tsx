import { Link } from "@/components/link/Link";

const Blog: React.FC<BlogProps> = () => {
  return (
    <main>
      <h1>The Blog</h1>
      <Link text={"Post 1"} url={"/blog/post-1"} />
      <Link text={"Post 2"} url={"/blog/post-2"} />
      <Link text={"Go back"} url={"/"} />
    </main>
  );
};

export interface BlogProps {
  // write your props here
}

export default Blog;
