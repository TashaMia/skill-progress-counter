import { useRef, useState } from "react";

export default function ChangeStatisticBtns() {
  const ref = useRef(null);
  const [selectedDay, setSelectedDay] = useState(" ");
  const [selectedHours, setSelectedHours] = useState(" ");

  function inputDayLimitation(event: React.FormEvent<HTMLInputElement>) {
    if (
      event.currentTarget.value.match(/^[\d ]+$/) &&
      +event.currentTarget.value <= 30
    ) {
      setSelectedDay(event.currentTarget.value);
    } else {
      return;
    }
  }

  function inputHoursLimitation(event: React.FormEvent<HTMLInputElement>) {
    if (
      event.currentTarget.value.match(/^[\d ]+$/) &&
      +event.currentTarget.value <= 24
    ) {
      setSelectedHours(event.currentTarget.value);
    } else {
      return;
    }
  }

  return (
    <div className="flex ml-8 flex-col gap-4">
      <div className="flex gap-4">
        <input
          className="rounded-lg p-2 text-secondary"
          type="text"
          value={selectedDay}
          onInput={(e) => inputDayLimitation(e)}
          ref={ref}
        ></input>
        <button className="text-tertiary rounded-lg bg-primary p-2 hover:text-white hover:bg-secondary">
          Выбрать день
        </button>
      </div>
      <div className="flex gap-4">
        <input
          className="rounded-lg p-2 text-secondary"
          type="text"
          ref={ref}
          value={selectedHours}
          onInput={(e) => {
            inputHoursLimitation(e);
          }}
        ></input>
        <button className=" text-tertiary rounded-lg bg-primary p-2 hover:text-white hover:bg-secondary">
          Количество часов
        </button>
      </div>
    </div>
  );
}
