// icon:video | Entypo http://entypo.com/ | Daniel Bruce
import * as React from 'react';
import { SVGProps } from 'react';

const VideoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 980 1000"
    fill="currentColor"
    width={24}
    height={24}
    className="fill-blue-500"
    {...props}
  >
    <path d="M980 250H880v100h100v100H880v100h100v100H880v100h100v60c0 10.667-4 20-12 28s-17.333 12-28 12H40c-10.667 0-20-4-28-12S0 820.667 0 810v-60h100V650H0V550h100V450H0V350h100V250H0v-60c0-12 4-21.667 12-29 8-7.333 17.333-11 28-11h900c10.667 0 20 3.667 28 11s12 17 12 29v60M380 650l250-150-250-150v300" />
  </svg>
);

export default VideoIcon;
