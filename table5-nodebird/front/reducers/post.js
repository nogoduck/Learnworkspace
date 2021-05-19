export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "beenfood",
      },
      content: "첫 번째 게시글 #해시태그 #빈푸드 #콩",
      Images: [
        {
          src: "https://placeholder.com/500x500",
        },
        {
          src: "https://placeholder.com/510x510",
        },
        {
          src: "https://placeholder.com/520x520",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "처음",
          },
          content: "첫 번쨰 댓글",
        },
        {
          User: {
            nickname: "둘째",
          },
          content: "두 번째 댓글",
        },
      ],
    },
  ],
  imagePath: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "쓰레기값",
  User: {
    id: 1,
    nickname: "bin",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPoasts],
      };
    default:
      return state;
  }
};

export default reducer;
