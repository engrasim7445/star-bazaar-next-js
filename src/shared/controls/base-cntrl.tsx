export function BaseCntrl({ lbl, children }: any) {
  return (
    <div className="w-100">
      <label>{lbl}</label>
      <div className="w-100 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
