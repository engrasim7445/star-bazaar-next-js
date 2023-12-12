import Footer from '@/theme/footer';
import NavbarPublic from '@/theme/navbar-public';

export default function PublicLayout({ children }: any) {
  return (
    <>
      <NavbarPublic />
      <main>{children}</main>
      <Footer />
    </>
  );
}
