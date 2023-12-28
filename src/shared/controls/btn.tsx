export function Btnz({ onClick, className, children }: any) {
  return (
    <button
      type="button"
      className={`rounded-full flex justify-center items-center text-xl p-3 bg-green ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export function BtnSuccess({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-green  ${className}`}>
      {children}
    </Btnz>
  );
}
export function BtnWarn({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-orange  ${className}`}>
      {children}
    </Btnz>
  );
}
export function BtnPrimary({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-indigo-500 ${className}`}>
      {children}
    </Btnz>
  );
}
export function BtnDanger({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-red-500 ${className}`}>
      {children}
    </Btnz>
  );
}
