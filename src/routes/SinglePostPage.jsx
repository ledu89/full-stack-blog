import ImageComponent from "../components/ImageComponent";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, deleniti?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Writen By</span>
            <Link className="text-blue-800" to="test">
              John Doe
            </Link>
            <span>on</span>
            <Link className="text-blue-800" to="test">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consequuntur quaerat odit quo voluptatem, corrupti natus aut
            accusantium laborum, rerum amet eos nam explicabo est reiciendis
            nesciunt iure nisi mollitia.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageComponent src="postImg.jpeg" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi,
            odit aliquid delectus a cum, vero recusandae iste sit inventore
            neque beatae, magni minima. Porro aliquam eum quam explicabo
            ipsa?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, consequatur ea iusto et esse officia animi
            exercitationem minima ut pariatur fuga est quaerat aut optio
            necessitatibus corporis quisquam nostrum rem!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className=" flex flex-col gap-4">
            <div className=" flex items-center gap-8">
              <ImageComponent
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <ImageComponent src="facebook.svg" />
              </Link>
              <Link>
                <ImageComponent src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />

          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className=" flex flex-col gap-2 text-sm">
            <Link to="/" className="underline">
              All
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
