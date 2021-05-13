import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Node Bird | 노드버드</title>
      </Head>
      <AppLayout>
        <div>Welcome</div>
      </AppLayout>
    </>
  );
};

export default Home;
