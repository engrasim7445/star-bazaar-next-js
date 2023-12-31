'use client';
import { CustomerAgentTable } from '../components/customer-agent-table';
import { DetailProfile } from '../components/detail-profile';

export default function Agent_Route() {
  return (
    <>
      <DetailProfile></DetailProfile>
      <CustomerAgentTable />
    </>
  );
}
