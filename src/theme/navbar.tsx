// import BtnLink from "@/shared/button/btn-link";
// import BtnRoute from "@/shared/button/btn-route";

import { Contentz } from '.';

export function NavBar() {
  return (
    <Contentz bgColor="bg-blue2" className="min-h-[100px] md:min-h-[50px]">
      <div className="h-100 col-span-2 md:col-span-2 md:order-1 bg-pink-500">
        Notification
      </div>
      <div className="h-100 col-span-8 md:col-span-2 bg-blue-500">Image</div>
      <div className="h-100 col-span-2 md:col-span-2 md:order-3 bg-purple-500">
        Profile
      </div>
      <div className="h-100 col-span-8 md:col-span-4 lg:col-span-4 bg-gray-500">
        Search
      </div>
      <div className="h-100 col-span-4 md:col-span-2 bg-red-500">Sort By</div>
      {/* <div className="h-100 md:col-span-2 hidden md:flex bg-yellow-500 ">
            Creator Login
          </div>
          <div className="h-100 md:col-span-2 hidden md:flex bg-green-500 ">
            Customer Login
          </div> */}
    </Contentz>
  );
}
