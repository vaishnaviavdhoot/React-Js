export const Shimmer = () => {
  return (
    <div className="shimmer-container">   
    {Array.from({ length: 15 }).map((_, i) => (
      <div className="shimmer-card" key={i}></div>
    ))}
    </div>
  )}