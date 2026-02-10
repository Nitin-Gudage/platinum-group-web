import { IoStar, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";

const Rating = ({ rating = 0, max = 5, size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, index) => {
        const starNumber = index + 1;

        return (
          <span key={index} className={sizeClasses[size]}>
            {rating >= starNumber ? (
              // Full star
              <IoStar className="text-yellow-400 drop-shadow-sm" />
            ) : rating >= starNumber - 0.5 ? (
              // Half star
              <IoStarHalfSharp className="text-yellow-400 drop-shadow-sm" />
            ) : (
              // Empty star
              <IoStarOutline className="text-yellow-400/50" />
            )}
          </span>
        );
      })}
      {rating > 0 && (
        <span className="ml-2 text-sm text-gray-300 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;
