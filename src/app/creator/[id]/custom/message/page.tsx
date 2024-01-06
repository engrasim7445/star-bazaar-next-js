import { BtnSuccess, LinkWrap, TxtArea } from '@/shared';
import { OrderShoutoutLayout } from '../../components';
import { Draw } from '@mui/icons-material';

export default function CustomMessage() {
  return (
    <OrderShoutoutLayout>
      <h2
        className="p-3 bg-orange1 text-xl flex items-center mb-3"
        style={{ borderBottom: '1px solid yellow' }}
      >
        {/* history_edu */}
        <Draw />
      </h2>
      <div className="px-4">
        <TxtArea placeholder="Enter your custom shoutout message" />
        <div className="ms-2">
          <p className="text-orange">Create your own personalized message</p>
          <p className="text-orange">Max 200 characters</p>
        </div>

        <LinkWrap  url='/payment/101/custom' className='float-right'>
          <BtnSuccess className={`w-52 py-2 mt-5`} >Submit</BtnSuccess>
        </LinkWrap>
      </div>
    </OrderShoutoutLayout>
  );
}
