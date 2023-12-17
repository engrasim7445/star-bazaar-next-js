export function Testamonial() {

}

// <h2 *ngIf="dataz?.length"
//   style="text-align: center; font-weight: 900; font-size: 24px; margin-bottom: 10px; margin-top: 30px;">{{heading}}</h2>
// <div class="wrapper" *ngIf="dataz?.length">
//   <div style="display: flex; justify-content: end;" class="pe-3">
//     <i class="fa fa-chevron-left" id="left" style="color: white;"></i>
//     <div style="height: 10px; width: 10px;"></div>
//     <i class="fa fa-chevron-right" id="right" style="color: white;"></i>
//   </div>
//   <ul class="specific-carousel carousel ps-3" [ngStyle]="{'gap': !util.isSmall ? '0px': 'unset'}">
//     <li *ngFor="let x of dataz" class="card p-3 px-4 mx-1" style="display: flex; justify-content:  space-between">
//       <div class="img-name-class">
//         <div class="img">
//           <img [src]="x?.image" *ngIf="x.image" alt="img" draggable="false">
//           <div class="no-image" *ngIf="!x.image">
//             <span class="fa fa-user" style="color: white; font-size: 30px;"></span>
//           </div>
//         </div>
//         <div>
//           <h2 class="ms-3" style="font-size: 1rem;">
//             {{x.name || ''}}
//           </h2>
//         </div>
//       </div>
//       <!-- <h6>Ratings</h6> -->
//       <div class="col-12" style="display: flex; margin-top: 0.5rem;">
//         <span class="fa" style="color:yellow; font-size: 1rem;" *ngFor="let item of [1,2,3,4,5]"
//           [ngClass]="{'fa-star': item <=  +x?.rating || 0, 'fa-star-o': item > +x?.rating || 0 }"
//           [ngStyle]="{'padding-left': item == 1 ? '0px':'5px', 'text-shadow': item <= +x?.rating || 0 ?  '0px 0px 10px #fafafa85': 'unset'}"></span>
//       </div>
//       <p class="comment" style="text-overflow: ellipsis;">
//         {{x?.comment || ''}}
//       </p>

//       <!-- <img src="../../../../assets/icon/starss.png"> -->
//       <!-- <i class="fa fa-star-half-o"></i> -->
//     </li>
//   </ul>
// </div>