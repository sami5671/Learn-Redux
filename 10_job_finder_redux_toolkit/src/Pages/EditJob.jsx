import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJob, modifyJob } from "../Features/Jobs/JobSlice";

const EditJob = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobId = params.jobId;
  const navigate = useNavigate();

  const [jobTitle, setTitle] = useState("");
  const [jobSalary, setSalary] = useState("");
  const [jobDeadline, setDeadline] = useState("");
  const [jobType, setType] = useState("");

  const { title, salary, deadline, type } = useSelector(
    (state) => state.jobs.job
  );

  useEffect(() => {
    dispatch(fetchJob(jobId));
  }, [jobId, dispatch]);

  useEffect(() => {
    // Set form values when job data is fetched
    if (title) setTitle(title);
    if (salary) setSalary(salary);
    if (deadline) setDeadline(deadline);
    if (type) setType(type);
  }, [title, salary, deadline, type]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const id = jobId;
    const jobData = {
      title: jobTitle,
      salary: jobSalary,
      deadline: jobDeadline,
      type: jobType,
    };
    dispatch(modifyJob({ id, jobData }));
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="fieldContainer">
                <label
                  htmlFor="lws-JobTitle"
                  className="text-sm font-medium text-slate-300"
                >
                  Job Title
                </label>
                <select
                  id="lws-JobTitle"
                  name="lwsJobTitle"
                  value={jobTitle}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                >
                  <option value="" hidden>
                    Select Job
                  </option>
                  <option>Software Engineer</option>
                  <option>Software Developer</option>
                  <option>Full Stack Developer</option>
                  <option>MERN Stack Developer</option>
                  <option>DevOps Engineer</option>
                  <option>QA Engineer</option>
                  <option>Product Manager</option>
                  <option>Social Media Manager</option>
                  <option>Senior Executive</option>
                  <option>Junior Executive</option>
                  <option>Android App Developer</option>
                  <option>IOS App Developer</option>
                  <option>Frontend Developer</option>
                  <option>Frontend Engineer</option>
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobType">Job Type</label>
                <select
                  id="lws-JobType"
                  name="lwsJobType"
                  value={jobType}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="" hidden>
                    Select Job Type
                  </option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                  <span className="input-tag">BDT</span>
                  <input
                    type="number"
                    name="lwsJobSalary"
                    id="lws-JobSalary"
                    value={jobSalary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                    className="!rounded-l-none !border-0"
                    placeholder="20,00,000"
                  />
                </div>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-JobDeadline">Deadline</label>
                <input
                  type="date"
                  name="lwsJobDeadline"
                  id="lws-JobDeadline"
                  value={jobDeadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  id="lws-submit"
                  className="cursor-pointer btn btn-primary w-fit"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default EditJob;
