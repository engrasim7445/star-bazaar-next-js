import { ContentZ } from '@/theme';
import { Imgz } from '.';

export function BusinessPartner() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  data = [...data, ...data, ...data];
  return (
    <ContentZ>
      <h4 className="text-2xl col-span-12">Business Partner</h4>
      <div className="col-span-12 overflow-hidden">
      <div className="logos-slide">
            {data.map((x, i) => (
              <Imgz
                width="100"
                height="100"
                clz="mx-3"
                key={'partner_' + i}
              />
            ))}
          </div>
        {/* {
          [1,2].map(x => (
          

          ))
        } */}
       
      </div>
    </ContentZ>
  );
}
