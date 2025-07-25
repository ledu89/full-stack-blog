import ImageComponent from "./ImageComponent";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <ImageComponent
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          soluta vel quae neque fugit ut tenetur nobis delectus aspernatur sit,
          laboriosam, porro saepe, temporibus voluptatum deserunt repudiandae
          harum? In, id?
        </p>
      </div>
    </div>
  );
};

export default Comment;
