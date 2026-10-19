const stars = Array.from({ length: 58 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 61 + 7) % 100}%`,
  size: index % 11 === 0 ? 2 : 1,
  delay: `${(index % 12) * -0.7}s`,
  duration: `${4 + (index % 5)}s`,
}));

export default function StarField() {
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <i
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
