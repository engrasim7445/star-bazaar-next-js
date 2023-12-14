export  function Footer() {
  return (
    <div className="w-100 bg-blue2">
      <div className="sm:w-100 md:w-95 lg:w-90 xl:container mx-auto">
        <div className="grid grid-cols-12">
          <div className="p-4 col-span-5 md:col-span-5 row-span-2 bg-blue-500"></div>
          <div className="p-4 col-span-7 md:col-span-4 row-span-1 bg-yellow-500"></div>
          <div className="p-4 col-span-7 md:col-span-3 row-span-1 bg-pink-500"></div>
        </div>
      </div>
    </div>
  );
}
