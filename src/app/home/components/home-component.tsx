import { BusinessPartner, Testamonial } from '@/shared';
import { HomeRow } from './home-row';
import { Sliderz } from './sliderz';
import { Banners } from './banner';

export function HomeComponent() {
  return (
    <>
      <Banners />
      <Sliderz />
      <BusinessPartner />
      <HomeRow />
      <HomeRow />
      <HomeRow />
      <Testamonial />
    </>
  );
}
