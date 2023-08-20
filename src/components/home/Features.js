const featuresData = [
    {title : "Technical content", description : "Events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas like Android, Firebase and so much more!"},
    {title : "Workshops", description : "Full-day workshops, hands-on experiences, hacking and debugging events, all centered on your favorite Google technologies."},
    {title : "Networking", description : "Meet and connect with other developers in your community."}
]

function Features(url){
    return(
        <>
             <div className="grid place-items-center w-full">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">What does {url?.url} brings you at our events/workshops</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl border-2 border-solid">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
                                </div>
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

export default Features
