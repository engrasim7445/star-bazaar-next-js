import { ContainerXL_Height } from "@/theme";
import { DetailProfile } from "./components/detail-profile";

export function ProfileLayout({children}: any) {
  return (
    <ContainerXL_Height>
      <DetailProfile />
      {children}
    </ContainerXL_Height>
  )
}