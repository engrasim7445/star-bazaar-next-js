import { BusinessPartner, Testamonial } from '@/shared';
import { ContainerXL_Height } from '@/theme';
import { Card_6 } from './components/business-row';

export default function BusinessComponent() {
  return (
    <ContainerXL_Height>
      <BusinessPartner />
      <div className="col-span-12">
        <div className="grid grid-cols-6 gap-1 md:gap-2 xl:gap-4">
          <Card_6 />
          <Card_6 />
          <Card_6 />
          <Card_6 />
        </div>
      </div>
      <Testamonial />
    </ContainerXL_Height>
  );
}
