import localFont from "next/font/local";

export const instrumentSans = localFont({
  src: [
    {
      path: "InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "InstrumentSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "InstrumentSans-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
  ],
  display: "swap",
});
