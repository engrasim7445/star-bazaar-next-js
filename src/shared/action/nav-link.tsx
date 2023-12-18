export function NavLinkz({lbl, icon}: any) {
  return (
    <div className="flex flex-col text-center cursor-pointer">
      <span className="material-icons">{icon}</span>
      <span> {lbl}</span>
    </div>
  );
}
