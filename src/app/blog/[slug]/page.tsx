import { Link } from "@/components/link/Link";

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
  return (
    <main>
      <h1>The Blog Post {params.slug}</h1>
      <Link url={"/blog"} text={"Go back to BLOG page"} />
    </main>
  );
};

export interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default BlogPost;
