function Hero(){
    return(
        <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <img src="/about.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">GDG Indore</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary"><a href="https://ggd.community.dev/gdg-indore" target="_blank">Join our Community</a></button>
                </div>
            </div>
        </div>
    )    
}

export default Hero
