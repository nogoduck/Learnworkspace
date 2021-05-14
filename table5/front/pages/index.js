import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { useSelector } from "react-redux";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <>
      <Head>
        <title>Node Bird | 노드버드</title>
      </Head>
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((post, index) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  );
};

export default Home;
