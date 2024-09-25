import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <FaSpinner className="text-5xl animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
