import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);
  const [counterStarted, setCounterStarted] = useState(false);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation;
}, counterRef);
ScrollTrigger.create({
  trigger: counterRef.current,
  start: "top bottom-=100",
  onEnter: () => setCounterStarted(true),
});

  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32 mr-2.5">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
            {counterStarted ? (
                <CountUp 
                  start={0}
                  end={item.value} 
                 suffix={item.suffix}
                  duration={3.5} 
                />
              ) : (
                `0${item.suffix}`
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;