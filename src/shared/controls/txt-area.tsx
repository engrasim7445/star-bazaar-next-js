export function TxtArea({ id, name, lbl, setVal, stl, placeholder }: any) {
  lbl = lbl || ''
  const stylez = {
    height: '120px',
    border: '1px solid white',
    ...stl,
  };
  return (
    <>
      <label htmlFor={id || name} className="text-lg">
    {lbl}
  </label>
      <textarea
        name={name}
        id={id || name}
        style={stylez}
        className="w-full bg-transparent p-2 rounded-lg"
        placeholder={placeholder}
      ></textarea>
    </>
  
  );
}
