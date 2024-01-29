'use client'
import { useEffect, useState } from "react";
import { Imgz } from ".";
import { HttpStrgBrands } from "@/http/strg-http";

export function BusinessPartner() {
  const [data, setData] = useState([] as any);
  useEffect(() => {
    HttpStrgBrands().then(setData)
  }, []) 
  return (
    <>
      <h4 className="text-2xl col-span-12 mt-2">Business Partner</h4>
      <div className="col-span-12 overflow-hidden mb-2">
      <div className="logos-slide">
            {data.map((x: any, i: any) => (
              <Imgz
                width="100"
                height="100"
                className="mx-3"
                src={x.image}
                key={'partner_' + i}
              />
            ))}
          </div>
      </div>
    </>
  );
}
