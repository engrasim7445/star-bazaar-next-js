'use client'
import { ContentZ } from '@/theme';
import { Imgz } from '.';

export function Testamonial() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  data = [...data, ...data, ...data];
  return (
    <ContentZ>
      <h4 className="text-2xl col-span-12">Testamonial</h4>
      <div className="col-span-12 flex justify-end">
        <span 
        className="material-icons rounded-full bg-blue-950  !text-5xl mx-2 cursor-pointer">navigate_before</span>
        <span className="material-icons rounded-full bg-blue-950  !text-5xl mx-2 cursor-pointer">navigate_next</span>
      </div>



       {/* {data.map((x, i) => (
    
          ))} */}
    </ContentZ>
    
  );
}
{
  /* <div class="wrapper" *ngIf="dataz?.length">

  <ul class="specific-carousel carousel ps-3" [ngStyle]="{'gap': !util.isSmall ? '0px': 'unset'}">
    <li *ngFor="let x of dataz" class="card p-3 px-4 mx-1" style="display: flex; justify-content:  space-between">
      <div class="img-name-class">
        <div class="img">
          <img className='testamonial-img' [src]="x?.image" *ngIf="x.image" alt="img" draggable="false">
          <div class="no-image" *ngIf="!x.image">
            <span class="fa fa-user" style="color: white; font-size: 30px;"></span>
          </div>
        </div>
        <div>
          <h2 class="ms-3" style="font-size: 1rem;">
            {{x.name || ''}}
          </h2>
        </div>
      </div>
      <!-- <h6>Ratings</h6> -->
      <div class="col-12" style="display: flex; margin-top: 0.5rem;">
        <span class="fa" style="color:yellow; font-size: 1rem;" *ngFor="let item of [1,2,3,4,5]"
          [ngClass]="{'fa-star': item <=  +x?.rating || 0, 'fa-star-o': item > +x?.rating || 0 }"
          [ngStyle]="{'padding-left': item == 1 ? '0px':'5px', 'text-shadow': item <= +x?.rating || 0 ?  '0px 0px 10px #fafafa85': 'unset'}"></span>
      </div>
      <p class="comment" style="text-overflow: ellipsis;">
        {{x?.comment || ''}}
      </p>
    </li>
  </ul>
</div> */
}
