import { useState } from "react";
import ModalWindow from "./ModalWindow";
import AddSkillBtn from "./AddSkillBtn";
import SkillList from "./SkillList";
import Schedule from "./Schedule";
import ChangeStatisticBtns from "./ChangeStatisticBtns";
import Months from "./Months";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="w-screen flex p-16 gap-16 min-h-screen bg-tertiary">
      <div className="flex flex-col gap-8 items-start ">
        <AddSkillBtn modal={modal} setModal={setModal} />
        <SkillList />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        <Months />
        {/* <Schedule /> */}

        <ChangeStatisticBtns />
      </div>
      {modal && <ModalWindow />}
    </div>
  );
}

export default App;
