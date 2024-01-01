import { ContainerXL_Height } from "@/theme";
import { CreatorDetails, ShoutoutDemos } from "../components";

export default function PersonalizeLayout({children}: any) {
  return (
    <ContainerXL_Height >
      <ShoutoutDemos />
      {children}
      <CreatorDetails />
    </ContainerXL_Height>
  );
}