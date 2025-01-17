'use client'
export function Chk({ id, name, children, className, setVal, checked }: any) {
  const onChange = () => {

  }
  return (
    <h5 className={`flex items-center text-sm md:text-md gap-2 mb-3 ${className}`}>
        <input
          type="checkbox"
          id={name || id}
          name={name || id}
          // value="1"
          checked={checked || false}
          className="h-5 w-5" 
          onChange={onChange}
        />
      <label htmlFor={name || id} className="leading-none w-11/12">
      {children}
      </label>
    </h5>
  );
}
