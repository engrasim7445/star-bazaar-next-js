export function Iconz({className, icon, stl}: any) {
  return (
    <span className={`material-icons flex justify-center items-center ${className} `} style={stl || {}}>{icon}</span>
  );
}