import Link from "next/link";
export default function Footer() {
    return (
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
    <p>Copyright © 2024 - All right reserved by MegaByte_Mavericks Team</p>
  </aside>

        <div className="flex items-center justify-center space-x-4">
            {/* <h2 className="text-2xl font-bold mb-4 text-white">About Us</h2> */}
        <Link href="/team-profile" passHref
          className= "rounded-full bg-gray-700 p-2">About Us
        </Link>
          <div className="rounded-full bg-gray-700 p-2">
            <a target = "_blank" href = "https://iisc.ac.in" className="text-sm">College</a>
          </div>
          <div className="rounded-full bg-gray-700 p-2">
            <a href="https://github.com/vanshdhar999/College-ecommerce" className="text-sm" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </footer>
    );
  }
  