export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between">
          <div className="flex space-x-4">
            <span className="text-lg font-bold"><a href="https://iisc.ac.in" className="text-blue-400 hover:text-blue-300">College</a></span>
            <a href="#" className="text-gray-300 hover:text-gray-200">About us</a>
            <a href="#" className="text-gray-300 hover:text-gray-200">Contact</a>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center text-gray-300">
              <p>@ Copyright MegaByte_Mavericks 2024</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  