'use client';
import { DetailProfile, WalletAmout } from '../components/detail-profile';
import { CustomerAgentTable } from '../components/customer-agent-table';

export default function Customer_Route() {
  return (
    <>
      <DetailProfile>
        <WalletAmout />
      </DetailProfile>

      <CustomerAgentTable />
    </>
  );
}
