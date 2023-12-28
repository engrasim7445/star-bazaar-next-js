export function Txt({id, name, lbl, setVal, className, clz2}: any) {
  return (<div className="w-full">
  <label htmlFor={id || name} className="text-lg">
    {lbl}
  </label>
  <div
    style={{ height: '40px', border: '1px solid white' }}
    className={`rounded-full rounded-tl-none px-4 control ${className}`}
  >
    <input
      type="text"
      name={name}
      id={id || name}
      className={`w-full h-full bg-transparent ${clz2}`}
    />
  </div>
</div>)
}