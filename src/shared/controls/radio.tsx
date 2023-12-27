export function Radioz({id, name, lbl, val, setVal}: any) {
  return (
    <div  className="flex items-center">
      <input
        type="radio"
        // name={name}
        id={id}
        checked={id == val}
        onChange={($event) => setVal(id)}
        className="me-2 h-5 w-5 bg-green"
      />
      <label htmlFor={id} className="me-5 text-xl" 
      >
        {lbl}
      </label>
    </div>
  );
}
