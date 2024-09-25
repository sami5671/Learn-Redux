import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "./../../features/videos/videosSlice";
import Loading from "../ui/Loading";

export default function VideGrid() {
  // =================================================================
  const dispatch = useDispatch();
  const { isLoading, videos, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to render
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos Found!!</div>;
  } else if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }
  // =================================================================

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
