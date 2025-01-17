export function Table({ children }: any) {
  return (
    <div className="col-span-12 rounded-lg rounded-tl-none overflow-x-auto pb-3 bg-blue2">
      <table className="min-w-full">{children}</table>
    </div>
  );
}
export function Thead({ children }: any) {
  return (
    <thead className=" border-b">
      <tr>{children}</tr>
    </thead>
  );
}
export function Tbody({ children, className }: any) {
  return <tbody className={className}>{children}</tbody>;
}

export function Th({ children, className }: any) {
  return (
    <th scope="col" className={`text-lg font-medium text-gray-300 p-2 text-left ${className}`}>
      {children}
    </th>
  );
}
export function Tr({children}: any) {
  return (
    <tr className="bg-gray-900" style={{borderBottom: '1px solid white'}}>
      {children}
    </tr>
  )
}
export function Td({ children, className }: any) {
  return (
    <td className={`p-2 whitespace-nowrap text-lg font-medium  leading-none  ${className}`}>
      {children}
    </td>
  );
}
