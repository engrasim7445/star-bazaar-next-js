import { ContainerA, Footer, NavbarPublic } from '@/theme';

export default function PublicLayout({ children }: any) {
  return (
    <>
      <NavbarPublic />
      <ContainerA>{children}</ContainerA>
      <Footer />
    </>
  );
}
