import React from "react";
import Layout from "@/containers/Layout";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import BlogCard from "@/components/common/BlogCard";

const blogData = [
  {
    coverImg: "/blog-img.jpg",
    topic: "Topic Name",
    title: "Title Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut iste repellat fuga odio voluptates.",
    author: "Author Name",
    authorImg: "/user-icon.jpg",
    date: "Aug 14, 2023",
  },
];

const blogs = () => {
  return (
    <Layout title={"Google Developers Home"} about={"/about-us"}>
      <InnerPageContainer title="Blogs">
        <div className="grid place-items-center grid-cols-4 gap-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center max-sm:gap-6">
          {blogData.map((t, k) => {
            return (
              <BlogCard
                key={k}
                cover={t.coverImg}
                topic={t.topic}
                title={t.title}
                desc={t.description}
                author={t.author}
                authorImg={t.authorImg}
                date={t.date}
              />
            );
          })}
        </div>
      </InnerPageContainer>
    </Layout>
  );
};

export default blogs;
