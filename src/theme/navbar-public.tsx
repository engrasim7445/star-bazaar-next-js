import { LinkFooter, LinkNav } from '@/shared';
import { ContainerXL, ContainerXL_Height } from '.';

export function NavbarPublic({ children }: any) {
  return (
    <>
      <ContainerXL
        className="bg-nav1 sticky top-0 z-10  flex items-center"
        clz2="py-1"
      >
        <div className="h-[50px] col-span-12 flex justify-between items-center ">
          <LinkFooter
            url="./"
            lbl=""
            icon="arrow_back"
            className="text-2xl mb-0"
          />
          <h1 className="text-2xl">Contact Us</h1>
          <span></span>
        </div>
      </ContainerXL>
      <ContainerXL_Height>{children}</ContainerXL_Height>
    </>
  );
}
