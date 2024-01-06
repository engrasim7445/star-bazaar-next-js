'use client'

import { ContentCopyOutlined } from "@mui/icons-material";

export function TxtBase({
  id,
  name,
  lbl,
  className,
  children,
}: any) {
  return (
    <div className="w-full">
      <label htmlFor={id || name} className="text-lg">
        {lbl}
      </label>
      <div
        style={{ height: '40px', border: '1px solid white' }}
        className={`rounded-full rounded-tl-none px-4 control ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
export function Txt({ id, name, lbl, setVal, className, clz2 }: any) {
  return (
    <TxtBase lbl={lbl} className={className}>
      <input
        type="text"
        name={name}
        id={id || name}
        className={`w-full h-full bg-transparent ${clz2}`}
      />
    </TxtBase>
  );
}
export function TxtCopy({ id, name, lbl, setVal, val, className, clz2, onClick }: any) {
  return (
    <TxtBase lbl={lbl} className={`flex justify-between items-center bg-gray-500 ${className}`}>
      <input
        type="text"
        name={name}
        value={val}
        id={id || name}
        className={`w-full h-full bg-transparent ${clz2}`}
        disabled={true}
      />
      <ContentCopyOutlined className='cursor-pointer ms-1' onClick={onClick} />
    </TxtBase>
  );
}
