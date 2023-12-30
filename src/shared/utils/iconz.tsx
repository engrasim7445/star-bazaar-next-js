export function Iconz({className, icon, stl, onClick}: any) {
  icon = icon || 'block'
  return (
    <span 
      onClick={onClick}
      className={`material-icons flex justify-center items-center ${className} `}
      style={stl || {}}
    >{icon}</span>
  );
}