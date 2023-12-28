export function Container({ children, className, clz2 }: IContainer) {
  return (
    <div className={`w-full ${className}`}>
      <div className=" sm:w-full xl:w-10/12  mx-auto">
        <div className={`grid grid-cols-12 px-1 py-2 ${clz2}`}>{children}</div>
      </div>
    </div>
  );
}

export function ContainerA({ children, className, clz2 }: IContainer) {
  return (
    // min-h-[92vh]
    <Container className={`min-h-[63vh] ${className}`} clz2={clz2}>
      {children}
    </Container>
  );
}
export function ContainerB({ children, className, clz2 }: IContainer) {
  return (
    <div className={`w-full min-h-[63vh] px-1 py-3 ${className} `}>
      <div className={`sm:w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 rounded-2xl mx-auto ${clz2}`}>
          {children}
        </div>
    </div>
  );
}
export function ContainerC({ children, className }: IContainer) {
  return (
    <div className={`grid grid-cols-12 gap-3 bg-blue2 p-3 rounded-lg ${className}`}>
      {children}
    </div>
  );
}
export interface IContainer {
  children?: any;
  className?: string;
  clz2?: string;
}
