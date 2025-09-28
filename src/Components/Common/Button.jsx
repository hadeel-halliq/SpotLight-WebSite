export default function Button({ buttonName, buttonIcon, buttonStyle }) {
  const baseStyle =
    "w-fit flex items-center gap-2 text-white text-sm border-[1px] border-primary rounded-tl-[15px] rounded-tr-[4px] rounded-br-[15px] rounded-bl-[4px] px-4 py-2 cursor-pointer";
  const styleVariants = {
    mainStyle: "bg-primary",
    secondStyle: "bg-transparent",
  };
  const resolvedStye = `${baseStyle} ${styleVariants[buttonStyle]}`;
  return (
    <div className={resolvedStye}>
      {buttonIcon}
      <p>{buttonName}</p>
    </div>
  );
}
