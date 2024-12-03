type IntroductionProps = {
  greeting?: string;
  fullName?: string;
  position?: string;
}

export default function Introduction({greeting = "Hello", fullName = "World", position=""}: IntroductionProps) {
  return (
    <div className="bg-slate-900 p-60">
      <span className="flex justify-center mr-[28rem] mb-[-1.5rem]">{greeting}</span>
      <h1 className="flex justify-center text-[75px]">{fullName}</h1>
      <span className="">{position}</span>
    </div>
  )
}
