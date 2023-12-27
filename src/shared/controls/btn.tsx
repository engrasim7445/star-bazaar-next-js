export function Btnz({ onClick, clz, children }: any) {
  return (
    <button
      type="button"
      className={`rounded-full flex justify-center items-center text-xl p-3 bg-green ${clz}`}
      // onClick={onClick}
    >
      {children}
    </button>
  );
}
export function BtnSuccess({ onClick, clz, children }: any) {
  return (
    <Btnz onClick={onClick} clz={`bg-green  ${clz}`}>
      {children}
    </Btnz>
  );
}
export function BtnWarn({ onClick, clz, children }: any) {
  return (
    <Btnz onClick={onClick} clz={`bg-orange  ${clz}`}>
      {children}
    </Btnz>
  );
}
export function BtnPrimary({ onClick, clz, children }: any) {
  return (
    <Btnz onClick={onClick} clz={`bg-indigo-500 ${clz}`}>
      {children}
    </Btnz>
  );
}
export function BtnDanger({ onClick, clz, children }: any) {
  return (
    <Btnz onClick={onClick} clz={`bg-red-500 ${clz}`}>
      {children}
    </Btnz>
  );
}
