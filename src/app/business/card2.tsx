export function Card2() {

}

{/* <a [id]="star._id" style="padding:0px; margin:0px" *ngIf="show">
  <!-- (click)="goToStarDetail()" -->
  <!-- (click)="goToStarDetail(star._id)" -->
  <div class="item zoom" >
    <figure [ngClass]="{'zoom': !util.isSmall}" (click)="showAnalyticsDialog()">
      <img  [src]="star.photoUrl"  />
      <div class="rankInfoDv" *ngIf="star.rank && IsRanked">
        <img src="../../../../assets/images/rank-bg.svg" loading="lazy">
        <p *ngIf="IsRanked">{{ star.rank }}</p>
      </div>
    </figure>
    <img style="width: 100%;" class="mt-1" src="../../../../assets/icon/seprator.png" >
    <div style="display:flex; justify-content: space-between;">
      <h1 [ngStyle]="{'line-height' : util.isSmall ? 1.5 : 1}" style="margin: 0px;">{{ star.fullName }}</h1>
      <div class="btn-group-toggle" data-toggle="buttons" *ngIf="!util.isSmall">
        <button
          (click)="addToCompare()"
          [ngStyle]="{'background' : star.isAdded ? '#06b22e': star.isBusinessSuite ? 'transparent': '#343a40'}"
          [ngClass]="star.isBusinessSuite ? 'btn-outline-success' : 'btn-dark'"
          class="btn btn-sm  text-nowrap " 
          style="margin: 0px; border-radius:  50px; font-size:10px; color: white;" 
          type="button">
          {{star.isBusinessSuite ? 'Add to Compare' : 'Comming Soon..'}}
        </button>
        <!-- INQUIRY -->
      </div>
    </div>
    <button 
      *ngIf="util.isSmall"
      (click)="addToCompare()"
      [ngStyle]="{'background' : !star.isAdded ? 'transparent': '#06b22e'}"
      class="btn btn-sm btn-outline-success text-nowrap" 
      style="margin:0px; width:100%; border-radius:  50px; font-size:10px; color: white;" 
      type="button">
      Add to Compare
    </button>
    <!-- INQUIRY -->
    <p class="my-1"> 
      Followers: 
      <span style="color:#FFF400;" >
        {{ millifyz(star?.totalFollowers || '-')}}
      </span>  
    </p>
    <p>
      Starting: 
      <span style="color:#FFF400;" 
      *ngIf="businessAmount">
         {{ businessAmount | dollarWithTax }}
         <!-- PKR | number: '1.0-0' || '' -->
        <!-- | dollarWithTax -->
      </span>
      <span style="color:#FFF400;" 
      *ngIf="!businessAmount"> - </span>
    </p>
  </div>
</a>
<div *ngIf="!show">
  <div class="item zoom">
      <div class="figure skeleton-animation">
      </div>
      <div class="col-12" style="position: relative;">
          <div style="height: 25px; border-radius: 3px;" class="my-1 col-7 skeleton-animation"></div>
          <div style="height: 25px; border-radius: 15px; position: absolute; right:0; top: -5px" class="my-1 col-4 skeleton-animation"></div>
          <div style="height: 15px; border-radius: 3px;" class="my-1 col-6 skeleton-animation"></div>
          <div style="height: 15px; border-radius: 3px;" class="my-1 col-8 skeleton-animation"></div>
      </div>
    </div>
</div> */}