export const initialState = {
  mainPoasts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "NotAngry",
      },
      content: "첫 버드",
      Images: [
        { src: "http://placehold.it/500x500" },
        { src: "http://placehold.it/450x450" },
        { src: "http://placehold.it/400x400" },
      ],
      Comments: [
        {
          User: {
            nickname: "FabioWimber",
          },
          content: "kona is hard",
        },
        {
          User: {
            nickname: "OuO",
          },
          content: "Second Comment",
        },
      ],
    },
  ],
  imagePaths: [],
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
