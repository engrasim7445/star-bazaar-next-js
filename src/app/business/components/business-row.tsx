import { ContainerXL } from '@/theme';
import { BusinessCard } from './business-card';

export function Card_6() {
  return (
    <div className="col-span-12">
      <div className="grid grid-cols-6 gap-1 md:gap-2 xl:gap-4">
        <BusinessCard d={{ image: '/temp/mikaal.webp' }} />
        <BusinessCard d={{ image: '/temp/mahira-khan.webp' }} />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </div>
    </div>
  );
}
