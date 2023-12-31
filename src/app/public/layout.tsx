import { ContainerXL_Height, Footer, NavbarPublic } from '@/theme';

export default function PublicLayout({ children }: any) {
  return (
    <>
      <NavbarPublic />
      <ContainerXL_Height>{children}</ContainerXL_Height>
      {/* <Footer /> */}
    </>
  );
}
