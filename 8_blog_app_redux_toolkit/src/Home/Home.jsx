import AllPosts from "../components/AllPosts/AllPosts";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      {/* <!-- navbar start  --> */}
      <Navbar />
      {/* <!-- navbar end  --> */}

      {/* <!-- main --> */}
      <section className="wrapper">
        <aside>
          <Sidebar />
        </aside>
        {/* <!-- posts container  --> */}
        <main className="" id="">
          {/* <!-- single post --> */}
          {/* <PostCard /> */}
          <AllPosts />
          {/* <!-- Single Post Ends --> */}
        </main>
        {/* <!-- posts container ends --> */}
      </section>
    </>
  );
};

export default Home;
