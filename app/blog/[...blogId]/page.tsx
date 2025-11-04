export default async function BlogPostPage({ params }: any) {
  const { blogId } = await params;
  return <div>Blog Post Page {blogId}</div>;
}
