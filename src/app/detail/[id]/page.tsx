import { BusinessPartner, Testamonial } from '@/shared';
import { ContainerA } from '@/theme';
import { ShoutoutDemos } from '../components/shoutout-demos';
import { ShoutoutPackages } from '../components/shoutout-packages';
import { CreatorDetails } from '../components/creator-details';

export default function BusinessComponent() {
  return (
    <ContainerA>
      <ShoutoutDemos />
      <CreatorDetails />
      <ShoutoutPackages />
      {/* <div className="col-span-12">
        <div className="grid grid-cols-6 gap-1 md:gap-2 xl:gap-4"></div>
      </div>
      <Testamonial /> */}
    </ContainerA>
  );
}
