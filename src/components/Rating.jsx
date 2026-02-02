import { IoStar, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";

const Rating = ({ rating = 0, max = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, index) => {
        const starNumber = index + 1;

        return (
          <span key={index}>
            {rating >= starNumber ? (
              // Full star
              <IoStar className="text-yellow-400" />
            ) : rating >= starNumber - 0.5 ? (
              // Half star
              <IoStarHalfSharp className="text-yellow-400" />
            ) : (
              // Empty star
              <IoStarOutline className="text-yellow-400" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
