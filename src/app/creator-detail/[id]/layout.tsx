import { ContainerA } from "@/theme";
import { CreatorDetails } from "../components/creator-details";
import { ShoutoutDemos } from "../components/shoutout-demos";

export default function CreatorDetailLayout({children}: any) {
  return (
    <ContainerA >
      <ShoutoutDemos />
      {children}
      <CreatorDetails />
    </ContainerA>
  );
}