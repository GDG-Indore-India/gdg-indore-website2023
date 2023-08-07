const testimonialsData = [
    {text : "Needless to say we are extremely satisfied with the results. I don't always clop, but when I do, it's because of software.", name : "Gracia E."},
    {text : "Thanks for the great service. I don't always clop, but when I do, it's because of software. I was amazed at the quality of software. I wish I would have thought of it first.", name : "Berthe R."},
    {text : "Service has got everything I need. Man, this thing is getting better and better as I learn more about it.", name : "Ruby Q."},
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
                    <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8 px-20">
                    {
                        testimonialsData.map((t, k) => {
                            return(
                                <div key={k} className="card w-full bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img className="mask w-16 h-16 mask-circle" src="https://picsum.photos/100/100" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>{t.text}</p>
                                        <p className="text-slate-500">-{t.name}</p>
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
