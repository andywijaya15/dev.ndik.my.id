import { Card } from "./Card";

export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        id="home"
        style={{
          backgroundImage: `url("/mm_photography-937.jpg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="absolute">
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
      </div>
      <section className="bg-base-100 py-20 px-6 min-h-screen" id="my-projects">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Warehouse Managemenet System"
            desc="A full-featured warehouse management system that tracks inventory, automates stock updates, and integrates with ERP solutions for real-time monitoring."
            image="Jenis-gudang-dan-kelebihannya.jpg"
          />
          <Card
            title="Point Of Sales"
            desc="A user-friendly POS system for retail stores, enabling fast checkout, sales reporting, and inventory synchronization."
            image="Kasir-1024x683.jpg"
          />
          <Card
            title="Document Control"
            desc="A document management solution to organize, track, and secure company documents with version control and access permissions."
            image="Documents-2.jpg"
          />
        </div>
      </section>
    </>
  );
}
