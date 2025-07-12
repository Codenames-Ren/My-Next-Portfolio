export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-6 border-t-2 border-red-700">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-1 tracking-wide">Bayu Sukma</h3>
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
