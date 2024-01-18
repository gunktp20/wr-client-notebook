import { Slider } from "@material-tailwind/react";
 
export default function RangeSlider() {
  return (
    <div className="w-96">
      <Slider placeholder="Test" defaultValue={50} />
    </div>
  );
}

