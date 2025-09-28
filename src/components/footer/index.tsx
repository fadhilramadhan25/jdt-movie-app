export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian bawah */}
        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GENFLIX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
