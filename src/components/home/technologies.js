import Link from 'next/link';

const technologiesData = [
    {icon: "https://io.google/2022/app/images/accessibility-logo.svg"},
    {icon: "https://io.google/2022/app/images/android-logo.svg"},
    {icon: "https://io.google/2022/app/images/arcore-logo.svg"},
    {icon: "https://io.google/2022/app/images/chrome-logo.svg"},
    {icon: "https://io.google/2022/app/images/firebase-logo.svg"},
    {icon: "https://io.google/2022/app/images/flutter-logo.svg"},
    {icon: "https://io.google/2022/app/images/googleassistant-logo.svg"},
    {icon: "https://io.google/2022/app/images/googlemaps-logo.svg"},
    {icon: "https://io.google/2022/app/images/googlecloud-logo.svg"},
    {icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDYwQzAgMjYuODYyOSAyNi44NjI5IDAgNjAgMFYwQzkzLjEzNzEgMCAxMjAgMjYuODYyOSAxMjAgNjBWNjBDMTIwIDkzLjEzNzEgOTMuMTM3MSAxMjAgNjAgMTIwVjEyMEMyNi44NjI5IDEyMCAwIDkzLjEzNzEgMCA2MFY2MFoiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZD0iTTg4IDUzLjczMzNIMzJWNDQuODY2N0MzMiAzOS45NzEzIDM2LjA0NiAzNiA0MS4wMyAzNkg3OC45NjUzQzgzLjk1ODcgMzYgODggMzkuOTcxMyA4OCA0NC44NjY3VjUzLjczMzNaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGQ9Ik04OCA2MS4yMDAxSDMyVjUyLjMzMzVDMzIgNDcuNDM4MSAzNi4wNDYgNDMuNDY2OCA0MS4wMyA0My40NjY4SDc4Ljk2NTNDODMuOTU4NyA0My40NjY4IDg4IDQ3LjQzODEgODggNTIuMzMzNVY2MS4yMDAxWiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNODggNjguNjY2N0gzMlY1OS44QzMyIDU0LjkwNDcgMzYuMDQ2IDUwLjkzMzMgNDEuMDMgNTAuOTMzM0g3OC45NjUzQzgzLjk1ODcgNTAuOTMzMyA4OCA1NC45MDQ3IDg4IDU5LjhWNjguNjY2N1oiIGZpbGw9IiNFQTQzMzUiLz4KPHBhdGggZD0iTTMyIDU1Ljk2ODhMNjcuNTU1MyA2NC4yMDU0QzcxLjc2OTMgNjUuMTgwOCA3Ni4yMTIgNjQuMjc1NCA3OS42NjA3IDYxLjczNjhMODggNTUuNjAwMVY3NC44NTAxQzg4IDc5LjY4MDEgODMuOTU0IDgzLjYwMDEgNzguOTcgODMuNjAwMUg0MS4wMzQ3QzM2LjA0NiA4My42MDAxIDMyIDc5LjY4MDEgMzIgNzQuODUwMVY1NS45Njg4WiIgZmlsbD0iIzQyODVGNCIvPgo8L3N2Zz4K"},
    {icon: "https://io.google/2022/app/images/googleplay-logo.svg"},
    {icon: "https://io.google/2022/app/images/materialdesign-logo.svg"},
    {icon: "https://io.google/2022/app/images/machinelearning-logo.svg"},
    {icon: "https://io.google/2022/app/images/web-logo.svg"},
]


function Technologies(){


    return(
        <>
             <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-8 mt-32 px-8 content-center justify-center technology-card">
                <h1 className="text-4xl  text-center font-bold">Stay updated on these technologies we conducted our events</h1>
                <div className="grid mt-12 md:grid-cols-7 grid-cols-1 gap-8">
                {
                    technologiesData.map((technology, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100">
                                <figure className="mask-circle-wrapper rounded-full p-0 pt-0 px-0">
                                <Link href=""><img className="mask w-20 h-20 mask-circle" src={technology.icon} /></Link>
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

export default Technologies
