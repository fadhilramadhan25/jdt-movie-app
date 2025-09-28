import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Bagian atas selalu tampil */}
      <Navbar />

      {/* Bagian konten halaman yang berubah-ubah */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Bagian bawah selalu tampil */}
      <Footer />
    </div>
  );
}
