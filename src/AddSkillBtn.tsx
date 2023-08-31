import { Dispatch, SetStateAction } from "react";

export default function AddSkillBtn(props: {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="bg-primary p-2 rounded-xl text-lg text-tertiary w-28 hover:text-white hover:bg-secondary"
      onClick={() => props.setModal(!props.modal)}
    >
      Skill +
    </button>
  );
}
