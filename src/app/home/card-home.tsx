import { Iconz } from '@/shared';
import { Container } from '@/theme';
import Image from 'next/image';

export function RowHome({ d }: any) {
  return (
    <Container>
      <div className="col-span-12 flex justify-between mb-2">
        <h2 className="text-2xl">Heading for Row</h2>
        <div className="col-span-4">Buttons</div>
      </div>
      <div className="col-span-12">
        <div className="grid grid-cols-6 gap-1 md:gap-2 xl:gap-4">
          <CardHome d={{image: '/temp/mikaal.webp'}} />
          <CardHome d={{image: '/temp/mahira-khan.webp'}} />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
        </div>
      </div>
    </Container>
  );
}
export function CardHome({d}: any) {
  d = d || {image: 'https://dqc65nwcqwvpl.cloudfront.net/1701759239804-EYVxlOSXsAExOpX.jpg'}
  return (
    <div className="col-span-2 md:col-span-1 h-full 
      text-sm xl:text-xl text-white ">
      <div className="rounded-xl overflow-hidden h-52 sm:h-72 md:h-52 xl:h-72 2xl:h-80">
        <Image
          alt="Image"
          width={150}
          height={250}
          objectFit="cover"
          style={{ height: '100%', width: '100%' }}
          src={d.image}
          className="hover:scale-110 w-full h-full transition duration-500 cursor-pointer object-cover"
        />
      </div>
      <div className=''>
        <div className="md:text-xl h-8">
          <h3 className="leading-4 sm:text-xl">Name of the Creator</h3>
        </div>
        <h3 className="col-span-5">Profession</h3>

        <div className="col-span-5 flex justify-between">
          <h3 >PKR 1000</h3>
          <div className="flex items-center text-yellow-300">
            <Iconz icon="timer" />
            <h3 >10 Days</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <a [id]="star._id" style="padding:0px; margin:0px" *ngIf="show">
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
</div> */
}
