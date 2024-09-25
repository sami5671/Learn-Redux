import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/Blogs/BlogsSlice";
import Loading from "./../Loading/Loading";
import PostCard from "./../PostCard/PostCard";

const AllPosts = () => {
  // =========================redux========================================
  const { isLoading, isError, error, blogs } = useSelector(
    (state) => state.blogs
  );
  const { sort, filter } = useSelector((state) => state.sortAndFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs({ sort, filter }));
  }, [dispatch, sort, filter]);

  // ========================Logic to render=========================================
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && isLoading && blogs?.length === 0) {
    content = <div className="col-span-12">No videos Found!!</div>;
  } else if (!isError && !isLoading && blogs?.length > 0) {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <PostCard key={blog.id} blog={blog} />
        ))}
      </div>
    );
  }
  //   =================================================================
  return (
    <>
      <div>
        <div className="">{content}</div>
      </div>
    </>
  );
};

export default AllPosts;
