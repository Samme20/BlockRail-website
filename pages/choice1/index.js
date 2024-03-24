"use client";
import "./index.css";
import { useState } from "react";
import Link from "next/link";
export default function Choice1() {
  const [playing, setPlaying] = useState(true);
  const changeMute = () => {
    setPlaying(false);
  };
  return (
    <div className="wrapper">
      <video autoPlay onEnded={() => changeMute()}>
        <source src="choice1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={playing ? "playing" : "notPlaying"}>
        <Link href="/choice11" className="option">
          <p>Sure! Let me just take a quick piss on this little frog</p>
        </Link>
        <Link href="/" className="option">
          <p>Nah, I don&apos;t feel like it</p>
        </Link>
      </div>
    </div>
  );
}
