import { BusinessPartner, Testamonial } from '@/shared';
import { Sliderz } from './sliderz';
import { Banners } from './banner';
import { ContainerXL_Height } from '@/theme';
import { HomeRowAll } from './home-row-all';

export function HomeComponent() {

  return (
    <>
      <Banners />
      <Sliderz />
      <ContainerXL_Height>
        <BusinessPartner />
        <HomeRowAll />
        <Testamonial />
      </ContainerXL_Height>
    </>
  );
}
