"use client";
import "./index.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [muted, setMuted] = useState(true);
  const changeMute = () => {
    if (muted) {
      setMuted(false);
    } else {
      setMuted(true);
    }
  };
  return (
    <div className="center">
      <img alt="logotype" className="logo" width="7%" src="logo.png"></img>
      <Link href="/video2" className="box">
        <h1>click to enter</h1>
      </Link>
      <img
        onClick={() => changeMute()}
        alt="volume icon"
        className="icon"
        width="4%"
        src={muted ? "volume.png" : "mute.png"}
      ></img>
    </div>
  );
}
