import InnerPageContainer from "@/components/common/InnerPageContainer";

export default function Page() {
    return (
      <InnerPageContainer >
           <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
    <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue">About GDG Indore</h2>
        <p className="text-lg text-gray-700">
            GDG Indore, which stands for Google Developers Group Indore, is a technical-community based in Indore, India.
            We organize frequent meetup events which include talks on a wide range of technical topics where you can learn
            new skills through hands-on workshops, online challenges, interaction with the community, and hackathons.
            The community prides itself on being an inclusive environment where everyone and anyone interested in tech -
            from beginner developers to experienced professionals - all are welcome to join.
        </p>
        <p className="text-lg text-gray-700 mt-4">
            To learn more about the GDG program, visit{' '}
            <a
                href="https://developers.google.com/community/gdg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
            >
                here
            </a>
            .
        </p>
    </div>
</div>


      </InnerPageContainer>
    )
  }
  