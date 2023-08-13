import React from "react";
import Layout from "@/containers/Layout";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import ProfileCard from "@/components/common/ProfileCard";

const testimonialsData = [
  {
    picture: "/user-icon.jpg",
    name: "User Name",
    designation: "Designation Here",
    community: "",
    socialLinks: [
      {
        twitter: "https://twitter.com",
        instagram: "https://www.instagram.com/",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
];

const team = () => {
  return (
    <Layout title={"Google Developers Home"} about={'/about-us'}>
      <InnerPageContainer title="Our Team">
        <div className="grid place-items-center grid-cols-4 gap-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center max-sm:gap-6">
          {testimonialsData.map((t, k) => {
            return (
              <ProfileCard
                key={k}
                picture={t.picture}
                name={t.name}
                designation={t.designation}
                social={t.socialLinks[0]}
              />
            );
          })}
        </div>
      </InnerPageContainer>
    </Layout>
  );
};

export default team;
