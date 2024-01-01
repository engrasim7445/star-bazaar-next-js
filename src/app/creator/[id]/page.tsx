import { ContainerXL_Height } from '@/theme';
import { CreatorDetails, ShoutoutDemos, ShoutoutPackages } from './components';

export default function CreatorDetailRoute() {
  return (
    <ContainerXL_Height>
      <ShoutoutDemos />
      <ShoutoutPackages />
      <CreatorDetails />
    </ContainerXL_Height>
  );
}
