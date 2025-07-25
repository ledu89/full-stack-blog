import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <ImageComponent
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* details */}
      <div className="flex flex-col  gap-4 xl:w-2/3">
        <Link to="test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.!
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
        </div>
        <span>2 days ago</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius minus
          maiores officiis quisquam et dolores? Rem officiis voluptatem numquam
          nulla deserunt cupiditate libero, exercitationem voluptate in, aliquid
          odit ea qui.
        </p>
        <Link to="test" className="text-blue-800 text-sm underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
