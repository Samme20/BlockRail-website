import "./index.css";
import { useState } from "react";
import Link from "next/link";
export default function choice2() {
  const [playing, setPlaying] = useState(true);
  const changeMute = () => {
    setPlaying(false);
  };
  return (
    <div className="wrapper">
      <video autoPlay onEnded={() => changeMute()}>
        <source src="choice11.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={playing ? "playing" : "notPlaying"}>
        <Link href="/choice11" className="option">
          <p>Okay let's go!</p>
        </Link>
      </div>
    </div>
  );
}
