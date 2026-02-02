const Avatar = ({ src, name, size = 40, className }) => {
  return (
    <img
      src={src}
      alt={name}
      className={`rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Avatar;
