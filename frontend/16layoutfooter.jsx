const Footer = () => {
  return (
    <footer className="bg-white border-t shadow-sm px-6 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        
        <p>
          © {new Date().getFullYear()} AssetFlow ERP. All rights reserved.
        </p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <span>Version 1.0.0</span>
          <span>Built with React + Vite</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;