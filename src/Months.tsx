import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Month from "./Month";
import { useEffect, useState } from "react";

export default function Months() {
  const months = [
    <Month name={"Январь"} days={"31"} />,
    <Month name={"Февраль"} days={"28"} />,
    <Month name={"Март"} days={"31"} />,
    <Month name={"Апрель"} days={"30"} />,
    <Month name={"Май"} days={"31"} />,
    <Month name={"Июнь"} days={"30"} />,
    <Month name={"Июль"} days={"31"} />,
    <Month name={"Август"} days={"31"} />,
    <Month name={"Сентябрь"} days={"30"} />,
    <Month name={"Октябрь"} days={"31"} />,
    <Month name={"Ноябрь"} days={"30"} />,
    <Month name={"Декабрь"} days={"31"} />,
  ];
  const [index, setIndex] = useState(1);

  let date = new Date();
  let month = date.getMonth();

  useEffect(() => {
    setIndex(month);
  }, []);

  //   useEffect(() => {
  //     if (index === 11) {
  //       setIndex(0);
  //     }
  //     if (index === 0) {
  //       setIndex(11);
  //     }
  //   }, [index]);

  return (
    <div className="flex gap-4 justify-center items-center">
      <button
        onClick={() => {
          setIndex(index - 1);
          if (index === 0) {
            setIndex(11);
          }
        }}
      >
        <ArrowLeft />
      </button>
      {months[index]}
      <button
        onClick={() => {
          setIndex(index + 1);
          if (index === 11) {
            setIndex(0);
          }
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
