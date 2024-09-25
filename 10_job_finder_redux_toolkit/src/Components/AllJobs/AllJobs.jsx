import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../Features/Jobs/JobSlice";
import Loading from "./../Loader/Loading";
import JobList from "./../JobList/JobList";

const AllJobs = () => {
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  //   =================================================================
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && isLoading && jobs?.length === 0) {
    content = <div className="col-span-12">No videos Found!!</div>;
  } else if (!isError && !isLoading && jobs?.length > 0) {
    content = (
      <div className="">
        {jobs.map((job) => (
          <JobList key={job.id} job={job} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div>
        <div>{content}</div>
      </div>
    </>
  );
};

export default AllJobs;
