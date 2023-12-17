export function Contentz({children, clz}: any) {
  return (
    <div className={'w-100 bg-blue2'}>
      <div className=" sm:w-full 2xl:w-10/12 xl:container mx-auto">
        <div className={`grid grid-cols-12 px-1 py-2 ${clz}`}>
          { children }
        </div>
      </div>
    </div>
  );
}
export function ContentZ({children, clz}: any) {
  return (
    <div className={'w-100'}>
      <div className=" sm:w-full 2xl:w-10/12 xl:container mx-auto">
        <div className={`grid grid-cols-12 px-1 py-2 ${clz}`}>
          { children }
        </div>
      </div>
    </div>
  );
}
