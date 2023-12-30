import { ContainerXL_Height } from "@/theme";
import { CreatorDetails } from "../components/creator-details";
import { ShoutoutDemos } from "../components/shoutout-demos";

export default function CreatorDetailLayout({children}: any) {
  return (
    <ContainerXL_Height >
      <ShoutoutDemos />
      {children}
      <CreatorDetails />
    </ContainerXL_Height>
  );
}