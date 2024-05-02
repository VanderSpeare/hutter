import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
    <>
      <Header label="Trang chủ" />
      <Form placeholder="Hôm nay bạn thế nào?" />
      <PostFeed />
    </>
  )
}