import { ProfessionBage } from '@/shared';
import { DetailProfile, WalletAmout } from '../components/detail-profile';

export default function Creator_Route() {
  return (
    <DetailProfile>
      <h2 className="text-md leading-tight">
        Response In : <b className="text-yellow rounded-md ">3 Days</b>
      </h2>
      <h3>
        <ProfessionBage item="Influencer" />
        <ProfessionBage item="Female Actor" />
        <ProfessionBage item="Musician" />
      </h3>
      <WalletAmout />
    </DetailProfile>
  );
}
