import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Bitcoin Serviços</Link>
      <div>
        <Link to="/login" className="mr-4">Login Admin</Link>
      </div>
    </nav>
  );
}