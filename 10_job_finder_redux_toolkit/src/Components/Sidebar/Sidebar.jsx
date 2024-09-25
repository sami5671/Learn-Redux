import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFilterJobs, fetchJobs } from "../../Features/Jobs/JobSlice";

const Sidebar = () => {
  // =================================================================
  const dispatch = useDispatch();

  const handleFilterAllJobs = () => {
    dispatch(fetchJobs());
  };

  const handleFilterInternship = (query) => {
    dispatch(fetchFilterJobs(query));
  };
  const handleFilterFullTime = (query) => {
    dispatch(fetchFilterJobs(query));
  };
  const handleFilterRemote = (query) => {
    dispatch(fetchFilterJobs(query));
  };

  // =================================================================
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                onClick={handleFilterAllJobs}
                className="main-menu menu-active cursor-pointer"
                id="lws-alljobs-menu"
              >
                <i className="fa-solid fa-briefcase"></i>
                <span> All Available Jobs</span>
              </a>
              <ul className="space-y-6 lg:space-y-2">
                <li>
                  <a
                    className="sub-menu cursor-pointer"
                    onClick={() => handleFilterInternship("Internship")}
                    id="lws-internship-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                    Internship
                  </a>
                </li>
                <li>
                  <a
                    className="sub-menu cursor-pointer"
                    onClick={() => handleFilterFullTime("Full Time")}
                    id="lws-fulltime-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                    Full Time
                  </a>
                </li>
                <li>
                  <a
                    className="sub-menu cursor-pointer"
                    onClick={() => handleFilterRemote("Remote")}
                    id="lws-remote-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                    Remote
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/addNewJob">
                <a className="main-menu" id="lws-addJob-menu">
                  <i className="fa-solid fa-file-circle-plus"></i>
                  <span>Add NewJob</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
