import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeJob } from "../../Features/Jobs/JobSlice";

const JobList = ({ job }) => {
  const { id, title, type, salary, deadline } = job;
  const dispatch = useDispatch();
  // =================================================================

  let jobType;

  if (type === "Full Time") {
    jobType = (
      <div className="lws-type">
        <i className="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
        Full-time
      </div>
    );
  } else if (type == "Internship") {
    jobType = (
      <div className="lws-type">
        <i className="fa-solid fa-stop !text-[#FF5757] text-lg mr-1.5"></i>
        Internship
      </div>
    );
  } else {
    jobType = (
      <div className="lws-type">
        <i className="fa-solid fa-stop !text-[#56E5C4] text-lg mr-1.5"></i>
        Remote
      </div>
    );
  }

  const handleDelete = (id) => {
    dispatch(removeJob(id));
  };
  // =================================================================
  return (
    <>
      <div className="lws-single-job">
        <div className="flex-1 min-w-0">
          <h2 className="lws-title">{title}</h2>
          <div className="job-footers">
            {jobType}

            <div className="lws-salary">
              <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              BDT {salary}
            </div>
            <div className="lws-deadline">
              <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
              Closing on {deadline}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <Link to={`/editJob/${id}`}>
              <button type="button" className="lws-edit btn btn-primary">
                <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                Edit
              </button>
            </Link>
          </span>

          <span className="sm:ml-3">
            <button
              onClick={() => handleDelete(id)}
              type="button"
              className="lws-delete btn btn-danger"
            >
              <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default JobList;
