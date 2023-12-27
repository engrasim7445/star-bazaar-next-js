export function Iconz({clz, icon, stl}: any) {
  return (
    <span className={`material-icons flex justify-center items-center ${clz} `} style={stl || {}}>{icon}</span>
  );
}