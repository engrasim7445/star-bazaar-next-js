// import BtnLink from "@/shared/button/btn-link";
// import BtnRoute from "@/shared/button/btn-route";

export function NavBar() {
  return (
    <div className="w-100 bg-blue2">
      <div className=" sm:w-full md:w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 lg:container  mx-auto">
        <div className="grid grid-cols-12 min-h-[120px] md:min-h-[60px]">
          <div className="h-100 col-span-2 md:col-span-2 md:order-1 bg-pink-500">
            Notification
          </div>
          <div className="h-100 col-span-8 md:col-span-2 bg-blue-500">
            Image
          </div>
          <div className="h-100 col-span-2 md:col-span-2 md:order-3 bg-purple-500">
            Profile
          </div>
          <div className="h-100 col-span-8 md:col-span-4 lg:col-span-4 bg-gray-500">
            Search
          </div>
          <div className="h-100 col-span-4 md:col-span-2 bg-red-500">
            Sort By
          </div>
          {/* <div className="h-100 md:col-span-2 hidden md:flex bg-yellow-500 ">
            Creator Login
          </div>
          <div className="h-100 md:col-span-2 hidden md:flex bg-green-500 ">
            Customer Login
          </div> */}


        </div>
      </div>
    </div>
  );
}
