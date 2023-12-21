export function CreatorDetails() {
  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-7">
      <div className="grid grid-cols-12 mb-3">
        <div className="col-span-4 md:col-span-5 lg:col-span-3"></div>
        <div className="col-span-8 md:col-span-7 lg:col-span-9">
          <h2 className="text-2xl text-yellow">Name of the Creator</h2>
          <h3>
            Profession:
            <span className="bg-green rounded-sm px-2 ms-2">Actor</span>
            <span className=" bg-green rounded-sm px-2 ms-2 ">
              Female Action
            </span>
            <span className="bg-green rounded-sm px-2 ms-2">Musician</span>
          </h3>
          {/* style={{textDecoration: '0.01px underline wavy yellow'}} */}
          <p>Description of the Creator would display here</p>
        </div>
      </div>
    </div>
  );
}
