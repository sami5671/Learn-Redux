import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "../features/Blog/BlogSlice";
import Navbar from "./../components/Navbar/Navbar";
import BlogDetail from "../components/BlogDetails/BlogDetail";
import RelatedBlog from "../components/RelatedBlog/RelatedBlog";
import Loading from "./../components/Loading/Loading";

const Blog = () => {
  // =====================Redux============================================
  const dispatch = useDispatch();
  const { blogId } = useParams();
  //   console.log(params);
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  const { id, tags } = blog || {};
  // ======================Rendering logic===========================================
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No Blog found!</div>;
  }
  if (!isLoading && !isError && blog?.id) {
    content = (
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        <BlogDetail blog={blog} />
        {/* <!-- detailed post ends --> */}
        {/* <!-- related posts --> */}
        <RelatedBlog currentBlogId={id} tags={tags} />
        {/* <!-- related posts ends --> */}
      </section>
    );
  }
  //   =================================================================
  return (
    <>
      <body>
        {/* <!-- navbar start  --> */}
        <Navbar />
        {/* <!-- navbar end  --> */}
        {/* <!-- Go Home / Go Back --> */}
        <div className="container mt-8">
          <Link to="/">
            <a className="inline-block text-gray-600 home-btn" id="lws-goHome">
              <i className="mr-2 fa-solid fa-house"></i>Go Home
            </a>
          </Link>
        </div>

        {content}
      </body>
    </>
  );
};

export default Blog;
