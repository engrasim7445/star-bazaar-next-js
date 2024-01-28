'use client';
import { HttpStrgHome } from '@/http/strg-http';
import { useEffect, useState } from 'react';
import { HomeRow } from '.';

export function HomeRowAll() {
  const defaultData = [
    {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ] as any;
  const [data, setData] = useState({
    firstRow: {} as any,
    secondRow: {} as any,
    // rowManagementData: [] as any, //defaultData,
    activeProfessions:  [] as any //defaultData
  });
  useEffect(() => {
    HttpStrgHome().then((d) => {
      console.log({d})
      setData(d);
    });
  }, []);
  return (
    <>
      {data?.firstRow?.name ? <HomeRow d={data.firstRow} noCategory={true}/> : ''}
      {data?.activeProfessions?.map((x: any, i: any) => (
        <HomeRow d={x} key={x.name + i}/> 
      ))}
      {data?.secondRow?.name ? <HomeRow d={data.secondRow} /> : ''}
    </>
  );
}
