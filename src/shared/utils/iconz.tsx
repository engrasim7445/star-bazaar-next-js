export function Iconz({clz, children}: any) {
  return (
    <i className={'material-icons ' + clz && ''}>{children}</i>
  );
}