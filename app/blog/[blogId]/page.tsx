export default async function Blog({ params }: any) {
  const postId = (await params).blogId;
  return <div>This is blog post page with postId : {postId}</div>;
}
// understanding dynamic route segments and slugs
