'use client';
import {
  BtnDefault,
  BtnPrimary,
  BtnSuccess,
  ProfessionBage,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@/shared';
import { DetailProfile, WalletAmout } from '../components/detail-profile';
import { CustomerAgentTable } from '../components/customer-agent-table';

export default function Creator_Route() {
  return (
    <>
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
      <div className="col-span-12 mt-4 flex gap-1">
        <BtnSuccess className="rounded-t-xl rounded-b-none w-28 py-1 md:py-2">
          My Order
        </BtnSuccess>
        <BtnDefault className="rounded-t-xl rounded-b-none w-28">
          Billing Status
        </BtnDefault>
      </div>
      {/* <CreatorBillingStatus /> */}
      <CreatorOrder />
    </>
  );
}
function CreatorBillingStatus() {
  return (
    <Table>
      <Thead>
        <Th>Order ID</Th>
        <Th className="hidden md:block">Date & Time</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            1693810257444 <br />
            <span className="block md:hidden">Sep 4, 2023, 11:50:57 AM</span>
          </Td>
          <Td className="hidden md:block">Sep 4, 2023, 11:50:57 AM</Td>
          <Td>PKR 1</Td>
          <Td>Pending</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
function CreatorOrder() {
  return (
    <Table>
      <Thead>
        <Th>Order ID</Th>
        <Th className="hidden md:block">Shoutout Type</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
        <Th className='flex justify-center'>Action</Th>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            1693810257444 <br />
            <span className="block md:hidden">Business Shoutout</span>
          </Td>
          <Td className="whitespace-break-spaces hidden md:block">Business Shoutout</Td>
          <Td>PKR 1</Td>
          <Td>Pending</Td>
          <Td className='flex justify-center'>
            <BtnPrimary className="py-1.5 text-sm">
              Order Details
            </BtnPrimary>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
