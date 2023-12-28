import { OrderShoutoutLayout } from '@/app/creator-detail/components';
import { BtnSuccess, Iconz, TxtArea } from '@/shared';

export default function CustomMessage() {
  return (
    <OrderShoutoutLayout>
      <h2
        className="p-3 bg-orange1 text-xl flex items-center mb-3"
        style={{ borderBottom: '1px solid yellow' }}
      >
        {/* history_edu */}
        <Iconz icon="draw" className="me-3" /> Custom Shoutout
      </h2>
      <div className="px-4">
        <TxtArea placeholder="Enter your custom shoutout message" />
        <div className="ms-2">
          <p className="text-orange">Create your own personalized message</p>
          <p className="text-orange">Max 200 characters</p>
        </div>

        <h3 className="text-lg mt-5 mb-3">Select Shoutout Video Language</h3>
        <BtnSuccess className={`w-full py-2 mt-5`} >Submit</BtnSuccess>
      </div>
    </OrderShoutoutLayout>
  );
}
