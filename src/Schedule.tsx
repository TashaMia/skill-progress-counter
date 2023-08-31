import { useEffect, useRef, useState } from "react";

export default function Schedule(props: { days: string }) {
  const canvas = useRef(null);

  const user = {
    skill: "yoga",
    month: "may",
    statistic: [
      { 1: 12 },
      { 2: 8 },
      { 3: 5 },
      { 4: 6 },
      { 5: 8 },
      { 6: 10 },
      { 7: 4 },
      { 8: 7 },
      { 9: 9 },
      { 10: 2 },
      { 11: 5 },
      { 12: 7 },
      { 13: 12 },
      { 14: 5 },
      { 15: 8 },
      { 16: 2 },
      { 17: 8 },
      { 18: 4 },
      { 19: 12 },
      { 20: 14 },
      { 21: 12 },
      { 22: 5 },
      { 23: 4 },
      { 24: 2 },
      { 25: 12 },
      { 26: 3 },
      { 27: 8 },
      { 29: 10 },
      { 30: 12 },
      { 31: 1 },
    ],
  };

  const draw = (canvas) => {
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, 620, 500);

    ctx.fillStyle = "#1B4965";
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(20, 10);
    ctx.lineTo(20, 460);
    ctx.lineTo(600, 460);
    ctx.stroke();

    for (let i = 1; i < 25; i++) {
      ctx.fillText(i, 3, 470 - i * 18);
    }
    for (let i = 1; i <= +props.days; i++) {
      ctx.fillText(i, 10 + i * 19, 480);
    }

    ctx.strokeStyle = "#5FA8D3";
    ctx.lineWidth = 2.0;

    ctx.beginPath();
    ctx.moveTo(40, 500 - user.statistic[0][1] * 19.7);

    user.statistic.map((hour) => {
      let step = 58.5;
      for (let i = 2; i <= +props.days; i++) {
        ctx.lineTo(step, 470 - hour[i] * 19.7);
        step = step + 18.5;
      }
    });
    ctx.stroke();
  };
  useEffect(() => {
    draw(canvas);
  }, [props.days]);

  return (
    <div className=" flex flex-col justify-start items-center">
      <div className="flex gap-4"></div>
      <canvas
        width={620}
        height={500}
        className="w-[90%] h-[90%]"
        ref={canvas}
      ></canvas>
    </div>
  );
}
