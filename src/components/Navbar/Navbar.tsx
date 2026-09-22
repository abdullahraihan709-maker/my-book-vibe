import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/book.ico";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200 transition-all">
            
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Mobile Dropdown & Logo Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 mr-2">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-10 mt-3 w-52 p-3 shadow-xl border border-base-200 gap-1"
                        >
                            <li><Link href="/" className="font-medium active:bg-[#23BE0A] active:text-white">Home</Link></li>
                            <li><Link href="/listed-books" className="font-medium">Listed Books</Link></li>
                            <li><Link href="/pages-to-read" className="font-medium">Pages to Read</Link></li>
                        </ul>
                    </div>
                {/* Mobile Dropdown & Logo End */}


                    {/* Navbar Logo Start */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="p-1.5 rounded-xl bg-base-200 group-hover:scale-105 transition-transform">
                            <Image src={logo} alt="Book Icon" width={28} height={28} className="object-contain" />
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-base-content">Book Vibe</span>
                    </Link>
                    {/* Navbar Logo End */}


                </div>

                {/* Desktop Navigation Start */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-medium text-base">
                        <li>
                            <Link href="/" className="rounded-lg hover:text-[#23BE0A] transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link href="/listed-books" className="rounded-lg hover:text-[#23BE0A] transition-colors">Listed Books</Link>
                        </li>
                        <li>
                            <Link href="/pages-to-read" className="rounded-lg hover:text-[#23BE0A] transition-colors">Pages to Read</Link>
                        </li>
                    </ul>
                </div>
                {/* Desktop Navigation End */}


                {/* Action Buttons Start */}
                <div className="navbar-end gap-3">
                    <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none rounded-xl px-6 font-semibold shadow-sm hover:shadow-md transition-all">
                        Sign In
                    </button>
                    <button className="btn bg-[#59C6D2] hover:bg-[#4bb1be] text-white border-none rounded-xl px-6 font-semibold shadow-sm hover:shadow-md transition-all">
                        Sign Up
                    </button>
                </div>
                {/* Action Buttons End */}

            </div>
            
        </header>
    );
};

export default Navbar;