import { useDispatch } from "react-redux";
import {
  postLike,
  postSaveBlog,
  removeUserSavedBlog,
} from "../../features/Blogs/BlogsSlice";
import {
  removeBlogType,
  saveBlogType,
  updateUserLikes,
} from "../../features/Blog/BlogSlice";

const BlogDetail = ({ blog }) => {
  const { id, title, description, image, isSaved, likes, createdAt, tags } =
    blog;
  // const [isSavedStatus, setIsSavedStatus] = useState(isSaved);

  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(postLike({ id, likes }));
    dispatch(updateUserLikes());
  };
  const handleSave = () => {
    dispatch(postSaveBlog(id));
    dispatch(saveBlogType());
  };
  const handleSaveRemove = () => {
    dispatch(removeUserSavedBlog(id));
    dispatch(removeBlogType());
  };

  return (
    <>
      <main className="post">
        <img
          src={image}
          alt="githum"
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            <span>#{tags[0]},</span> <span>#{tags[1]},</span>{" "}
            <span>#{tags[2]}</span>
          </div>
          <div className="btn-group">
            {/* <!-- handle like on button click --> */}
            <button
              onClick={handleLike}
              className="like-btn"
              id="lws-singleLinks"
            >
              <i className="fa-regular fa-thumbs-up"></i> {likes}
            </button>
            {/* <!-- handle save on button click --> */}

            {isSaved !== false ? (
              <button
                onClick={handleSaveRemove}
                className="active save-btn"
                id="lws-singleSavedBtn"
              >
                <i className="fa-regular fa-bookmark"></i>Saved
              </button>
            ) : (
              <button onClick={handleSave} className="" id="lws-singleSavedBtn">
                <i className="fa-regular fa-bookmark"></i> Save
              </button>
            )}
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
