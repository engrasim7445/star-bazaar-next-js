import { ContainerXL_Height } from "@/theme";
import { DetailProfile } from "./components/detail-profile";

export default function ProfileLayout({children}: any) {
  return (
    <ContainerXL_Height>
      {children}
    </ContainerXL_Height>
  )
}