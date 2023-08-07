const testimonialsData = [
    {icon : "/gdg-indore-logo.svg", name : "Google Developers Group Indore"},
    {icon : "/gdg-cloud-indore.svg", name : "Google Developers Group Cloud Indore"},
    {icon : "/wtm-indore.png", name : "Women Techmakers Indore"},
    {icon : "/tensorflow-indore.svg", name : "TensorFlow User Group Indore"},
]

function Hero(){
    return(
        <div>
                  <div className="hero pt-20 bg-base-100">
                    <div className="hero-content full-width flex-col lg:flex-row-reverse text-center justify-center">
                        {/* <img src="/about.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                        <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold">Google for Developers Indore</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary"><a href="https://ggd.community.dev/gdg-indore" target="_blank">Join our Community</a></button>
                        </div>
                    </div>
             </div>
                    <div className="grid mt-12 grid-cols-4-1 grid-cols-1 gap-8 px-20">
                    {
                        testimonialsData.map((t, k) => {
                            return(
                                <div key={k} className="card w-full bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img className="mask w-56 h-24" src={t.icon} />
                                    </figure>
                                    <div className="card-body items-center text-center pt-4 pb-4">
                                        <p className="text-slate-800">{t.name}</p>
                                    </div>
                                    </div>
                            )
                        })
                    }
                    
                </div>
        </div>

    )    
}

export default Hero
