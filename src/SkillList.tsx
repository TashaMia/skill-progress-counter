export default function SkillList() {
  const skills = ["📝 YOGA", "📝 CODE", " 📁 SPORT"];

  return (
    <div className="flex w-[100%] flex-col gap-4 items-start justify-start text-secondary text-lg">
      {skills.map((i) => {
        return <button key={i}>{i}</button>;
      })}
    </div>
  );
}
