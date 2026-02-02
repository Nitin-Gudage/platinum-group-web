import Rating from "./Rating";

const SwiperCard = ({ data }) => {
  if (!data) return null;

  return (
    <div
      className="
        relative w-full
        h-[300px] sm:h-[360px] md:h-[420px]
        rounded-xl overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover object-top"
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-3 sm:inset-5 md:inset-7
          rounded-3xl
          bg-gradient-to-r
          from-background
          via-background/40
          to-transparent

          dark:from-secondary
          dark:via-secondary/60
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-3 sm:inset-5 md:inset-7
          flex flex-col justify-center
          p-4 sm:p-6 md:p-10

          text-secondary
          dark:text-gray-200

          max-w-xl
          space-y-2 sm:space-y-3 md:space-y-4
        "
      >
        {/* Title */}
        <p
          className="
            text-primary
            dark:text-primary

            font-bold
            text-2xl sm:text-3xl md:text-5xl
            leading-snug
          "
        >
          {data.title}
        </p>

        {/* Subtitle */}
        <p
          className="
            text-primary
            dark:text-primary

            font-bold
            text-xl sm:text-2xl md:text-4xl
            leading-snug
          "
        >
          {data.subtitle}
        </p>

        {/* Rating & Text */}
        <div className="flex items-center gap-1 mt-1">
          {data.rating && <Rating rating={data.rating} />}

          <span className="ml-2 text-sm sm:text-base dark:text-gray-300">
            {data.text}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
          <button className="btn-primary">Book Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
