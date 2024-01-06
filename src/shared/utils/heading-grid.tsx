
export function GridHeading({className, heading, fontSize, children}: any) {
  return (
    <div
      className={`col-span-12 -m-3 mb-1 ps-4 flex items-center  p-1 ${className}`}
    >
      <span className="flex items-center">
      {children}
        
      </span>
      <h1 className="text-xl w-52">{heading}</h1>
    </div>
  );
}
