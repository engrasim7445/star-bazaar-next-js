import { BusinessPartner, Testamonial } from '@/shared';
import Banners from './banner';
import Sliderz from './sliderz';
import { RowHome } from './card-home';
import { Container } from '@/theme';

export default function Home() {
  return (
    <>
      <Banners />
      <Sliderz />
      <BusinessPartner />
      <RowHome />
      <RowHome />
      <Testamonial />
    </>
  );
}
