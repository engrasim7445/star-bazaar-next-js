import { ContainerXL_Height } from '@/theme';
import { Card_6 } from '../home/components/home-row';
// import { RowHome } from "../home/home-row";

export default function SearchRoute() {
  return (
    <ContainerXL_Height>
      <div className="col-span-12">
        <div className="grid grid-cols-6 gap-1 md:gap-2 xl:gap-4">
          <Card_6 />
          <Card_6 />
          <Card_6 />
          <Card_6 />
          {/* <HomeCard /> */}
        </div>
      </div>
    </ContainerXL_Height>
  );
}
