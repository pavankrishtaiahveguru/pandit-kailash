import { Source_Serif_4 } from "next/font/google";

// Editorial serif used for the hero heading and the navbar wordmark.
export const displaySerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
