export function ShoutoutPackages() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-5">
      <h5 className="text-2xl mb-3"><b>Select Shoutout Package</b></h5>
      <h5 className="text-xl">Personal Shoutout</h5>
      <ShoutoutPackageLayer clz="bg-purple-gredient">
        <h3 className="text-3xl">
          Standard Shoutout <b>For Fans</b>
        </h3>
        <h4 className="text-4xl"><b> PKR 100,000 </b></h4>
        <p>Hello _recipient_name_, this is _Creator_Name. </p>
        <p>Happiest birthday on behalf of _sender_name_</p>
        
      </ShoutoutPackageLayer>
      <ShoutoutPackageLayer clz="bg-orange-gredient">
        <h3 className="text-3xl">
          Custom Shoutout <b>For Fans</b>
        </h3>
        <h4 className="text-4xl"><b> PKR 100,000 </b></h4>
        <p> &nbsp;</p>
        <p>Create your own personalize message</p>
        
      </ShoutoutPackageLayer>
      <h5 className="text-xl">Business Shoutout</h5>
      <ShoutoutPackageLayer clz="bg-green-gredient">
        <h3 className="text-3xl">
          Business Shoutout
        </h3>
        <h4 className="text-4xl"><b> PKR 100,000 </b></h4>
        <p> &nbsp;</p>
        <p>Promote Your Business</p>
        
      </ShoutoutPackageLayer>
    </div>
  );
}
function ShoutoutPackageLayer({ children, clz }: any) {
  return ( 
    <div className={`justify-center items-center p-5 rounded-2xl text-center my-3 cursor-pointer ${clz}`}>
      {children}
    </div>
  );
}
