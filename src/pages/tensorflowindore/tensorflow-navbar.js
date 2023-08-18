import Link from "next/link"


function TensorFlowNavbar(props){
    return(
        <>
            <li className="mr-2"><Link href={props.about}>About Us</Link></li>
            <li className="mr-2"><Link href="/contact-us">Contact Us</Link></li>
            <li className="mr-2"><Link href="/team">Team</Link></li>
            <li className="mr-2"><Link href="/blogs">Blogs</Link></li>
            <li className="mr-2"><Link href="/newsletter">Newsletter</Link></li>
        </>
    )
}

export default TensorFlowNavbar