import Ticker, { TICKER_DIRECTION_RIGHT } from "framer-motion-ticker";
import React from "react";

const Testimonials = () => {
  const colors = ["#632bf3", "#f122c8", "#f16022", "#9ef344", "#44d3f3"];

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-5 mt-10">
      <Ticker duration={20} direction={TICKER_DIRECTION_RIGHT}>
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: "5px",
              height: "150px",
              width: "200px",
            }}
          />
        ))}
      </Ticker>
    </div>
  );
};

export default Testimonials;
