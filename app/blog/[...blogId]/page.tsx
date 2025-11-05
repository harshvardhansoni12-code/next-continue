export default async function BlogPostPage({ params }: any) {
  console.log(params);
  const { blogId } = await params;
  return <div>Blog Post Page {blogId}</div>;
}
