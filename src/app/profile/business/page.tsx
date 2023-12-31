import { CustomerAgentTable } from '../components/customer-agent-table';
import { DetailProfile } from '../components/detail-profile';

export default function Business_Route() {
  return (
    <>
      <DetailProfile></DetailProfile>
      <CustomerAgentTable />
    </>
  );
}
