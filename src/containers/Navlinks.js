import Link from 'next/link'


function Navlinks(about){
    return(
        about.url === 'gdgindore'|| about.url === 'gdgcloudindore' || about.url === 'wtmindore' || about.url === 'tensorflowindore'? <>
            <li className="mr-2"><Link href={(about.about !== undefined) ? about.about : '/'}>About Us</Link></li>
            <li className="mr-2"><Link href="/team">Team</Link></li>
            <li className="mr-2"><Link href={`/${about.url}/organisers`}>Organizers</Link></li>
            <li className="mr-2"><Link href="/contact-us">Contact Us</Link></li>
        </> :
        <>
            <li className="mr-2"><Link href={(about.about !== undefined) ? about.about : '/'}>About Us</Link></li>
            <li className="mr-2"><Link href="/contact-us">Contact Us</Link></li>
            {/* Added team page to check routing */}    
            <li className="mr-2"><Link href="/team">Team</Link></li>
            <li className="mr-2"><Link href="/blogs">Blogs</Link></li>
            <li className="mr-2"><Link href="/newsletter">Newsletter</Link></li>
        </>
    )
}

export default Navlinks
