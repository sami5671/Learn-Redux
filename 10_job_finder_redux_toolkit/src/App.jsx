import AllJobs from "./Components/AllJobs/AllJobs";
import JobFiltering from "./Components/JobFIltering/JobFiltering";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <body>
        {/* navbar */}
        <Navbar />
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          {/* sidebar */}
          <Sidebar />

          <div className="lg:pl-[14rem] mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
              {/* filter jobs */}
              <JobFiltering />
              <div className="jobs-list">
                {/* <!-- Single Job 1--> */}
                <AllJobs />
                {/* <!-- Single Job 1--> */}
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
