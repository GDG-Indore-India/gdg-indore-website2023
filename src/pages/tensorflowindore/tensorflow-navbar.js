

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-900">
            {/* Left side: Image */}
            <div className="flex items-center">
                <img src="/your-logo.png" alt="Logo" className="w-12 h-12 mr-2" />
                <span className="text-white font-semibold text-xl">Your Brand</span>
            </div>

            {/* Right side: Links */}
            <ul className="flex space-x-4">
                <li><Link href="/about"><a className="text-white">About</a></Link></li>
                <li><Link href="/contact-us"><a className="text-white">Contact Us</a></Link></li>
                <li><Link href="/blogs"><a className="text-white">Blogs</a></Link></li>
                <li><Link href="/team"><a className="text-white">Team</a></Link></li>
                <li><Link href="/newsletter"><a className="text-white">Newsletter</a></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
