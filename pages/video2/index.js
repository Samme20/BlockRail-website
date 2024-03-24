"use client";
import "./index.css";
import { useState } from "react";
import Link from "next/link";
export default function Video2() {
  const [playing, setPlaying] = useState(true);
  const changeMute = () => {
    setPlaying(false);
  };
  return (
    <div className="wrapper">
      <video autoPlay onEnded={() => changeMute()}>
        <source src="first.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={playing ? "playing" : "notPlaying"}>
        <Link href="/choice1" className="option">
          <p>I was just exploring and then I fell into a wierd portal...</p>
        </Link>
        <Link href="/choice2" className="option">
          <p>I was looking for you beautiful ;)</p>
        </Link>
      </div>
    </div>
  );
}
