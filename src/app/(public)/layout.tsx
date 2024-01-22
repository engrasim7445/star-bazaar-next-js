import { ContainerXL_Cols12, ContainerXL_Height } from '@/theme';

export default function PublicLayout({ children }: any) {
  return (
    <>
      <ContainerXL_Height>
        <div className='col-span-12 text-justify leading-tight text-xl'>{children}</div>
      </ContainerXL_Height>
    </>
  );
}
