import { useDispatch } from "react-redux";
import {
  allSelected,
  defaultSelected,
  mostLikedSelected,
  newestSelected,
  savedSelected,
} from "../../features/SortAndFilter/SortAndFilterSlice";

const Sidebar = () => {
  // =================================================================
  const dispatch = useDispatch();

  const handleSort = (value) => {
    if (value === "default") {
      dispatch(defaultSelected());
    } else if (value === "newest") {
      dispatch(newestSelected(value));
    } else if (value === "most_liked") {
      dispatch(mostLikedSelected(value));
    }
  };

  const handleAll = (value) => {
    dispatch(allSelected(value));
  };
  const handleSaved = (value) => {
    dispatch(savedSelected(value));
  };

  // =================================================================
  return (
    <>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                checked
                className="radio"
                onClick={() => handleAll("all")}
              />
              <label for="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                onClick={() => handleSaved("saved")}
              />
              <label for="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
