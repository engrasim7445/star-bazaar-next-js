export function Contentz({children}: any) {
  return (
    <div className={'w-100 bg-blue2'}>
      <div className=" sm:w-full 2xl:w-10/12 xl:container mx-auto">
        <div className="grid grid-cols-12 px-1 py-2">
          { children }
        </div>
      </div>
    </div>
  );
}
