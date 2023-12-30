import { BusinessPartner, Testamonial } from '@/shared';
import { HomeRow } from './home-row';
import { Sliderz } from './sliderz';
import { Banners } from './banner';
import { ContainerXL_Height } from '@/theme';

export function HomeComponent() {
  return (
    <>
      <Banners />
      <Sliderz />
      <ContainerXL_Height>
        <BusinessPartner />
        <HomeRow />
        <HomeRow />
        <HomeRow />
        <Testamonial />
      </ContainerXL_Height>
    </>
  );
}
