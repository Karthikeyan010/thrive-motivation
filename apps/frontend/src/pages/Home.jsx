import Navbar from "../components/Navbar";
export default function Home() {
  return (
   <div>
      <Navbar />

      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      >
       <h1 className="text-6xl font-bold mb-6 bg-blue-500">
          THRIVE MOTIVATION
        </h1>

        <button className="bg-red-600 px-8 py-3 rounded text-lg hover:bg-red-700 transition">
          BOOK
        </button>
      </div>
    </div>
    
  );
}