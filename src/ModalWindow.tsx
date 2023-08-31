export default function ModalWindow() {
  return (
    <div className="text-secondary fixed  top-72 left-8 w-44 h-24 flex flex-col justify-center items-center  text-start rounded-xl bg-white text-lg">
      <div className="border-b cursor-pointer border-b-tertiary w-[100%] h-[50%] flex justify-center items-center hover:bg-slate-300/[0.3] hover:rounded-t-xl">
        <p> 📁 Folder</p>
      </div>
      <div className=" w-[100%] cursor-pointer  h-[50%]  flex justify-center items-center hover:bg-slate-300/[0.3] hover:rounded-b-xl">
        <p> 📝 Skill</p>
      </div>
    </div>
  );
}
