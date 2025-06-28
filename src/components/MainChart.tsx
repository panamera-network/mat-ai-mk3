"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    TradingView?: any;
  }
}

export default function MainChart() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "OANDA:XAUUSD",
          interval: "60",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          container_id: "tradingview_main_chart",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
  id="tradingview_main_chart"
  className="min-w-[620px] min-h-[420px] w-full h-full flex-grow flex items-center justify-center"
></div>

  );
}
