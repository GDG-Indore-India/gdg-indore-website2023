import Link from 'next/link';

const technologiesData = [
    {icon: "/twitter.png"},
    {icon: "/instagram.jpeg"},
    {icon: "/linkedin.png"},
    {icon: "/facebook.png"},
]


function SocialLinks(){


    return(
        <>
             <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold text-primary">Follow us on our social platforms</h1>
                <div className="grid mt-12 md:grid-cols-4 grid-cols-1 gap-3 justify-center">
                {
                    technologiesData.map((technology, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100">
                                <figure className="mask-circle-wrapper rounded-full p-0 pt-0 px-0">
                                <Link href=""><img className="mask w-16 h-16 mask-circle" src={technology.icon} /></Link>
                                </figure>
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>
        </>
    )
}

export default SocialLinks
