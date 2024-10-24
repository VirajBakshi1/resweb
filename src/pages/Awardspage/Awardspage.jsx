import React from "react";
import { Awards } from "../../components/Awards";

const awardsData = [
  {
    image: "https://trainingzone.co.uk/app/uploads/2020/03/athitat_shinagowin.jpg",
    name: "Best Design Award",
    year: "2022",
    position: "1st Place",
  },
  {
    image: "https://www.ripleypr.com/blog/wp-content/uploads/2017/03/Awards-are-important.jpg",
    name: "Innovation Award",
    year: "2023",
    position: "2nd Place",
  },
  {
    image: "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
    name: "Excellence in Engineering",
    year: "2024",
    position: "Winner",
  },
  {
    image: "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
    name: "Outstanding Achievement",
    year: "2021",
    position: "3rd Place",
  },
];

function AwardsPage() {
  return (
    <div>
      <h1 className="text-4xl text-center bg-black text-white font-bold ">
        Awards & Achievements
      </h1>
      <Awards awards={awardsData} />
    </div>
  );
}

export default AwardsPage;