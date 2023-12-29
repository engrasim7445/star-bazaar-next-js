export function Iconz({className, icon, stl}: any) {
  icon = icon || 'block'
  return (
    <span className={`material-icons flex justify-center items-center ${className} `} style={stl || {}}>{icon}</span>
  );
}