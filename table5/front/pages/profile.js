import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "Fabio" },
    { nickname: "Cannondail" },
    { nickname: "노드버드" },
  ];
  const followingList = [
    { nickname: "Kenblock" },
    { nickname: "Gymkhana" },
    { nickname: "Driftking" },
  ];

  return (
    <>
      <Head>
        <title>Node Bird | 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
