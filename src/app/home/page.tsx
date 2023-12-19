import { BusinessPartner, Testamonial } from '@/shared';
import Banners from './banner';
import Sliderz from './sliderz';
import { HomeRow } from './home-row';

export default function Home() {
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
