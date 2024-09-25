import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  allBookSelected,
  featuredBookSelected,
} from "../features/filterBooks/filterSlice";

const NavButton = () => {
  const [active, setActive] = useState("");

  const dispatch = useDispatch();

  const handleAllBooks = () => {
    dispatch(allBookSelected("all"));
    setActive("all");
  };

  const handleFeaturedBooks = () => {
    dispatch(featuredBookSelected("featured"));
    setActive("featured");
  };

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          {active === "all" ? (
            <button className="filter-btn active-filter" id="lws-filterAll">
              All
            </button>
          ) : (
            <button
              onClick={handleAllBooks}
              className="filter-btn"
              id="lws-filterAll"
            >
              All
            </button>
          )}

          {active === "featured" ? (
            <button
              className="filter-btn active-filter"
              id="lws-filterFeatured"
            >
              Featured
            </button>
          ) : (
            <button
              onClick={handleFeaturedBooks}
              className="filter-btn"
              id="lws-filterFeatured"
            >
              Featured
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavButton;
