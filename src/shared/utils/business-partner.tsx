import { ContentZ } from '@/theme';
import Image from 'next/image';
import { Imgz } from '.';

export function BusinessPartner() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  data = [...data, ...data, ...data];
  return (
    <ContentZ>
      <h4 className="text-2xl col-span-12">Business Partner</h4>
      <div className="col-span-12 overflow-hidden">
        {/* <div style={{ width:'200%' }}> */}
        <div className="logos-slide ">
          {data.map((x, i) => (
            <Imgz
              width="100"
              height="100"
              clz="mx-3"
              key={'partner_' + i}
            />
          ))}
        </div>
        {/* </div> */}
        {/* <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-2 overflow-x-hidden">
          {data.map((x, i) => (
            <div className="col-span-1 " key={'partner_' + i}>
              <Imgz width="100" className="mx-1" />
            </div>
          ))}
        </div> */}
      </div>
    </ContentZ>
  );
}

{
  /* <div class="container busi-slide-logos busi-slide-logoss px-0" *ngIf="dataz?.length">
  <h2 class="col-12" style="text-align: center; font-weight: 900; font-size: 24px; margin-bottom: 20px; margin-top: 30px;">{{heading}}</h2>
  <div class="pb-3" style="display: flex; overflow:hidden;">
    <div class="logos-slide" *ngFor="let a of [1,2]" >
      <ng-container *ngFor="let data of dataz">
        <figure class="zoom mx-3" *ngIf="data?.image">
          <img [src]="data.image">
        </figure>
        <div *ngIf="!data?.image" class="business-skeleton skeleton-animation"></div>
      </ng-container>
    </div>
  </div>
</div> */
}
