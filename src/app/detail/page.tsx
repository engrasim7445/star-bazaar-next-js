import { ContainerA } from '@/theme';
import { ShoutoutDemos } from './components/shoutout-demos';
import { ShoutoutPackages } from './components/shoutout-packages';

export default function Detail() {
  return (
    <ContainerA>
      <ShoutoutDemos />
      <ShoutoutPackages />
    </ContainerA>
  );
}
