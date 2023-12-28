import { Iconz } from "@/shared";

export function GridHeading({className, heading, fontSize, icon}: any) {
  return (
    <div
      className={`col-span-12 -m-3 mb-1 ps-4 flex items-center  p-1 ${className}`}
    >
      <span className="flex items-center">
        <Iconz
          // edit_note
          icon={icon || "block"}
          className="me-3"
          stl={{ fontSize: fontSize || 40 }}
        />
      </span>
      <h1 className="text-xl w-52">{heading}</h1>
    </div>
  );
}
