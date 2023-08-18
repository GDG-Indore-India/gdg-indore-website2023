const testimonialsData = [
    { icon: "/gdg-indore-logo.svg", name: "Google Developers Group Indore" },
    {
      icon: "/gdg-cloud-indore.svg",
      name: "Google Developers Group Cloud Indore",
    },
    { icon: "/wtm-indore.png", name: "Women Techmakers Indore" },
    { icon: "/tensorflow-indore.svg", name: "TensorFlow User Group Indore" },
  ];

function TensorFlowCommunity (){
    return (
    <div className="grid mt-12 grid-cols-4-1 grid-cols-1 gap-8 px-20">
    {testimonialsData.map((t, k) => {
      return (
        <div key={k} className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img className="mask w-56 h-24" src={t.icon} />
          </figure>
          <div className="card-body items-center text-center pt-4 pb-4">
            <p className="text-slate-800">{t.name}</p>
          </div>
        </div>
      );
    })}
  </div>
  )
}
export default TensorFlowCommunity