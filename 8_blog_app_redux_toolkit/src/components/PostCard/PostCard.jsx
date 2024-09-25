import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postLike, removeUserSavedBlog } from "../../features/Blogs/BlogsSlice";
import { removeBlogType } from "../../features/Blog/BlogSlice";

const PostCard = ({ blog }) => {
  const { id, title, description, image, likes, createdAt, tags, isSaved } =
    blog;

  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(postLike({ id, likes }));
  };

  const handleSaveRemove = () => {
    dispatch(removeUserSavedBlog(id));
    dispatch(removeBlogType());
  };
  return (
    <>
      {/* <Link to="/blog/12"> */}
      <div className="lws-card">
        <Link to={`blog/${id}`}>
          <a>
            <img src={image} className="lws-card-image" alt="" />
          </a>
        </Link>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">{createdAt}</p>
            <p onClick={handleLike} className="cursor-pointer lws-likeCount">
              <i className="fa-regular fa-thumbs-up"></i>
              {likes}
            </p>
          </div>
          <Link to={`blog/${id}`}>
            <a className="lws-postTitle">{title}</a>
          </Link>
          <div className="lws-tags">
            {/* <span>#{tags[0]},</span> <span>#{tags[1]},</span>{" "}
            <span>#{tags[2]}</span> */}
          </div>
          {/* <!-- Show this element if post is saved --> */}
          <div className="flex gap-2 mt-4">
            {isSaved === true ? (
              <span
                onClick={handleSaveRemove}
                className="lws-badge cursor-pointer"
              >
                {" "}
                Saved{" "}
              </span>
            ) : (
              ""
            )}
          </div>
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
    </>
  );
};

export default PostCard;
