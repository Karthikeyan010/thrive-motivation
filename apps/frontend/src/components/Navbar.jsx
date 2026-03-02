import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      
      <div className="text-xl font-bold">THRIVE MOTIVATION</div>

      <div className="flex space-x-6 items-center">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/about" className="hover:text-cyan-400">About</Link>
        <Link to="/plans" className="hover:text-cyan-400">Plans & Pricing</Link>
        <Link to="/blog" className="hover:text-cyan-400">Blog</Link>
        <Link to="/workshops" className="hover:text-cyan-400">Workshops</Link>
        <Link to="/store" className="hover:text-cyan-400">Store</Link>
        <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
      </div>

    </nav>
  );
}