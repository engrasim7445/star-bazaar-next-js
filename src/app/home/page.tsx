import { BusinessPartner } from '@/shared';
import Banners from './banner';
import Sliderz from './sliderz';

export default function Home() {
  return (
    <>
      <Banners />
      <Sliderz />
      <BusinessPartner />
    </>
  );
}
