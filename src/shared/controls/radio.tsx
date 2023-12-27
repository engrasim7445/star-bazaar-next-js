export function Radioz({id, name, lbl, setVal}: any) {
  return (
    <div  className="flex items-center">
      <input
        type="radio"
        name={name}
        id={id}
        // onClick={setVal}
        className="me-2 h-5 w-5 bg-green"
      />
      <label htmlFor={id} className="me-5 text-xl" 
      // onClick={setVal}
      >
        {lbl}
      </label>
    </div>
  );
}
