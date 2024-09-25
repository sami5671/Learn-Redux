import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/RelatedBlogs/RelatedBlogsSlice";
import RelatedBlogList from "./RelatedBlogList";
import Loading from "../Loading/Loading";

const RelatedBlog = ({ tags, currentBlogId }) => {
  // =========================redux========================================

  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [dispatch, tags, currentBlogId]);
  // ==========================rendering logic=======================================
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No related blogs found!</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlogList key={blog.id} blog={blog} />
    ));
  }
  // =================================================================
  return (
    <>
      <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div className="space-y-4 related-post-container">
          {/* <!-- related post  --> */}
          {content}
          {/* <!-- related post ends --> */}
        </div>
      </aside>
    </>
  );
};

export default RelatedBlog;
