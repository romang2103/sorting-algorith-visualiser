import React, { useState } from "react";

export function Slider(props) {
  const [sliderValue, setSliderValue] = useState(50)

  function handleSliderChange(event) {
    setSliderValue(event.target.value)
    props.onChange(sliderValue)
  }

  return (
    <div>
      <input
        type="range"
        min="1"
        max="50"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Number of Bars: {sliderValue}</p>
    </div>
  );
}
