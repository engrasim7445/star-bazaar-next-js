export function Container({children, clz1, clz2} : any) {
  return (
    <div className={`w-full ${clz1}`}>
    <div className=" sm:w-full 2xl:w-10/12 xl:container mx-auto">
      <div className={`grid grid-cols-12 px-1 py-2 ${clz2}`}>
        { children }
      </div>
    </div>
  </div>
  )
}
