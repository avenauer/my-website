import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link passHref href="/">
      <a className="block w-10 fill-zinc-900 duration-200 ease-smooth dark:fill-white">
        <svg viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M65.0004 18.7L89.3004 32.8V51.6L105.5 42.2V23.4L65.0004 0L24.4004 23.4V126.6L65.0004 150L105.6 126.6V89.1L40.6004 51.6V32.8L65.0004 18.7ZM89.3004 98.4V117.2L65.0004 131.3L40.6004 117.2V70.3L89.3004 98.4Z"
            fill=""
          />
          <path
            d="M65 65.5996L0 28.0996V121.9L16.2 112.5V56.2996L65 84.3996L113.7 56.2996V112.5L129.9 121.9V28.0996L65 65.5996Z"
            fill="url(#paint0_linear_60_37)"
          />
          <defs>
            <linearGradient id="paint0_linear_60_37" x1="129.915" y1="74.9985" x2="1.75" y2="74.9985" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0CD0EC" />
              <stop offset="0.5" stopColor="#B97BDC" />
              <stop offset="1" stopColor="#EE52D5" />
            </linearGradient>
            <clipPath id="clip0_60_37">
              <rect width="129.9" height="150" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </Link>
  );
};

export default Logo;
