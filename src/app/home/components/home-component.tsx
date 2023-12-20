import { BusinessPartner, Testamonial } from '@/shared';
import { HomeRow } from './home-row';
import { Sliderz } from './sliderz';
import { Banners } from './banner';
import { ContainerA } from '@/theme';

export function HomeComponent() {
  return (
    <>
      <Banners />
      <Sliderz />
      <ContainerA>
        <BusinessPartner />
        <HomeRow />
        <HomeRow />
        <HomeRow />
        <Testamonial />
      </ContainerA>
    </>
  );
}
