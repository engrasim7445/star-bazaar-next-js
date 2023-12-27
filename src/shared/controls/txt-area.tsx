export function TxtArea({ id, name, setVal, stl, placeholder }: any) {
  const stylez = {
    height: '120px',
    border: '1px solid white',
    ...stl,
  };
  return (
      <textarea
        name={name}
        id={id || name}
        style={stylez}
        className="w-full bg-transparent p-2 rounded-lg"
        placeholder={placeholder}
      ></textarea>
  );
}
