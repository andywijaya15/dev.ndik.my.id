export const Card = ({ title, desc, image }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};
