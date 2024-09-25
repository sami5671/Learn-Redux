import { Link } from "react-router-dom";

const RelatedBlogList = ({ blog }) => {
  const { id, title, description, image, likes, isSaved, createdAt, tags } =
    blog;
  return (
    <>
      <Link to={`/blog/${id}`}>
        <div className="card">
          <a>
            <img src={image} className="card-image" alt="" />
          </a>
          <div className="p-4">
            <a className="text-lg post-title lws-RelatedPostTitle">{title}</a>
            <div className="mb-0 tags">
              <span>#{tags[0]},</span> <span>#{tags[1]},</span>{" "}
              <span>#{tags[2]}</span>
            </div>
            <p>{createdAt}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RelatedBlogList;
