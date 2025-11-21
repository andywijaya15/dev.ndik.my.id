export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/mm_photography-937.jpg")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex-col lg:flex-row">
        <img src="DSC01240.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Andy Wijaya</h1>
          <p className="py-6">
            I develop APIs, manage servers, and implement monitoring for scalable and stable applications.
          </p>
        </div>
      </div>
    </div>
  );
}
