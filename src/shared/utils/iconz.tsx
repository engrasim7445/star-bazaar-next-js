export function Iconz({clz, icon}: any) {
  return (
    <span className={`material-icons ${clz}`}>{icon}</span>
  );
}