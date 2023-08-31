import Schedule from "./Schedule";

export default function Month(props: { name: string; days: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-tertiary rounded-lg bg-primary px-2">{props.name}</h1>
      <Schedule days={props.days} />
    </div>
  );
}
