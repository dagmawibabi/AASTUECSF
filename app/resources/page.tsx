import React from "react";
import Header from "@components/Header";
import HomeImage from "@/public/homePhoto.png";

const ResourcesPage: React.FC = () => {
  return (
    <Header
      backgroundImage={HomeImage}
      mainText="Resources"
      subText=" Here, you will find a wide range of resources to help you strengthen your faith and spiritual well-being. From books on theology and spiritual growth to worship videos and spiritual songs, there is something for everyone."
    />
  );
};

export default ResourcesPage;
