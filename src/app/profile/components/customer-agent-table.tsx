'use client';
import { Thead, Th, Tbody, Tr, Td, Table, BtnSuccess } from '@/shared';

export function CustomerAgentTable() {
  return (
    <>
      <div className="col-span-12 mt-4">
        <BtnSuccess className='rounded-t-xl rounded-b-none w-28'>
          Order Status
        </BtnSuccess>
      </div>
      <Table>
        <Thead>
          <Th>Order ID</Th>
          <Th className="hidden md:block">Date & Time</Th>
          <Th>Creator</Th>
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
            <Td className="whitespace-break-spaces">Demo Creator Testing</Td>
            <Td>PKR 1</Td>
            <Td>Pending</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}
