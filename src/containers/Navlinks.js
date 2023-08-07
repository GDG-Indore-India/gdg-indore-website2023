import Link from 'next/link'


function Navlinks(){
    return(
        <>
            <li className="mr-2"><Link href="/about-us">About Us</Link></li>
            <li className="mr-2"><Link href="/contact-us">Contact Us</Link></li>
            {/* Added team page to check routing */}
            <li className="mr-2"><Link href="/team">Team</Link></li>
            <li className="mr-2"><Link href="/blogs">Blogs</Link></li>
            <li className="mr-2"><Link href="/newsletter">Newsletter</Link></li>
        </>
    )
}

export default Navlinks
