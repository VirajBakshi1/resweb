import React from "react";
import { MediaCoverage } from "../../components/MediaCoverage";

const articlesData = [
  {
    image: "src/assets/media/photo1.png",
    title: "Featured in Tech Today - Breakthrough Robotics",
  },
  {
    image: "https://example.com/article2.jpg",
    title: "Innovative Engineering Solutions - COEP Highlights",
  },
  {
    image: "https://example.com/article3.jpg",
    title: "National Robotics Champion - 2023 Award",
  },
  {
    image: "https://example.com/article4.jpg",
    title: "Startup Ecosystem Success Stories - Pune Edition",
  },
  {
    image: "https://example.com/article5.jpg",
    title: "Future of AI and Robotics - In Conversation with Experts",
  },
];

function MediaCoveragePage() {
  return (
    <div>
      <MediaCoverage articles={articlesData} />
    </div>
  );
}

export default MediaCoveragePage;