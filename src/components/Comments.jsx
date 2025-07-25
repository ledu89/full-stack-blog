import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center gap-8 w-full justify-between">
        <textarea
          placeholder="Write a comment..."
          name=""
          id=""
          className="w-full p-4 border-none outline-none bg-gray-100 rounded-xl "
        />
        <button className="bg-blue-800 text-white px-4 py-3 font-medium rounded-xl">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
