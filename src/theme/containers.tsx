export function ContainerHeight({ children, className }: IContainer) {
  return (
    <div className={`w-full min-h-[63vh] px-1 py-3 ${className} `}>
      {children}
    </div>
  );
}

export function ContainerXL({ children, className, clz2 }: IContainer) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full xl:w-10/12  mx-auto">
        <div className={`grid grid-cols-12 px-1 py-2 ${clz2}`}>{children}</div>
      </div>
    </div>
  );
}

export function ContainerXL_Height({ children, className, clz2 }: IContainer) {
  return (
    // min-h-[63vh]
    <ContainerXL className={`min-h-[63vh] ${className}`} clz2={clz2}>
      {children}
    </ContainerXL>
  );
}
export function ContainerMD({ children, className, clz2 }: IContainer) {
  return (
    <ContainerHeight className={className}>
      <div className={`sm:w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 rounded-2xl mx-auto ${clz2}`}>
        {children}
      </div>
    </ContainerHeight>
  );
}
export function ContainerSM({ children, className, clz2 }: IContainer) {
  return (
    <ContainerHeight className={className}>
      <div className={`sm:w-full md:w-8/12 lg:w-6/12 xl:w-5/12 rounded-2xl mx-auto ${clz2}`}>
        {children}
      </div>
    </ContainerHeight>
  );
}
export function ContainerGrid({ children, className }: IContainer) {
  return (
    <div className={`grid grid-cols-12 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
export function ContainerGrid_BG({ children, className }: IContainer) {
  return (
    <ContainerGrid className={`gap-3 bg-blue2 p-3 rounded-lg ${className}`}>
      {children}
    </ContainerGrid>
  );
}

export interface IContainer {
  children?: any;
  className?: string;
  clz2?: string;
}
