export function Card1() {
  return (
    <div className="w-100">
      
    </div>
  )
}
{/* <a [id]="star._id" style="padding:0px; margin:0px" *ngIf="show">
  <div class="item zoom" (click)="goToStarDetail()">
    <figure [ngClass]="{'zoom': !util.isSmall}">
      <img  [src]="star.photoUrl" loading="lazy" />
      <div class="rankInfoDv" *ngIf="star.rank && IsRanked">
        <img src="../../../../assets/images/rank-bg.svg" loading="lazy">
        <p *ngIf="IsRanked">{{ star.rank }}</p>
      </div>
    </figure>
    <h1>{{ star.fullName }}</h1>
    <p class="my-1 profession-dv"> {{ professionname }} </p>
    <!-- [ngStyle]="{'font-size.px' : !util.isSmall ? '10' : '9'}" -->
      <span style="color:white;background: #06b22e; border-radius: 7px 0px 7px 0px; font-size:10px; padding: 3px 5px; position: absolute; margin-top:-3px" 
      *ngIf="isBusiness"> 
      For Business {{util.isLarge ? 'Promotion' : ''}} 
      <i class="fa fa-line-chart"></i>
    </span>
    <!-- Promotion -->
    <p style="display:flex; justify-content: space-between;" 
    *ngIf="!isBusiness">
      <span class="celeb-price" >
        {{ (personalAmount | dollarWithTax) || '-' }}
      </span>
      <span style="color:#FFF400;" class="respons-dv">
        <i class="fa fa-clock-o" style="color:white"></i>
        <!-- <img src="../../../../assets/icon/response-time.svg" width="14px" /> -->
        {{ star.responseTime || '-' }} {{star.responseTime > 1 ? 'Days' : 'Day'}}
      </span>
    </p>
  </div>
</a>
<div *ngIf="!show">
  <div class="item zoom">
      <div class="figure skeleton-animation">
      </div>
      <div class="col-12">
          <div style="height: 30px; border-radius: 3px;" class="my-1 col-12 skeleton-animation"></div>
          <div style="height: 15px; border-radius: 3px" class="my-1 col-10 skeleton-animation"></div>
          <div style="height: 15px; border-radius: 3px; float:left" class="my-1 col-4 skeleton-animation"></div>
          <div style="height: 15px; border-radius: 3px; float:right" class="my-1 col-3 skeleton-animation"></div>
      </div>
    </div>
</div> */}