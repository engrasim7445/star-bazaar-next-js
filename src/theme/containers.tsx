export function Container({ children, clz1, clz2 }: IContainer) {
  return (
    <div className={`w-full ${clz1}`}>
      <div className=" sm:w-full xl:w-10/12  mx-auto">
        <div className={`grid grid-cols-12 px-1 py-2 ${clz2}`}>{children}</div>
      </div>
    </div>
  );
}

export function ContainerA({ children, clz1, clz2 }: IContainer) {
  return (
    // min-h-[92vh]
    <Container clz1={`min-h-[63vh] ${clz1}`} clz2={clz2} >
      {children}
    </Container>
  );
}
export function ContainerB({ children, clz1, clz2 }: IContainer) {
  return (
    <div className={`w-full min-h-[63vh] ${clz1} px-1 py-3`}>
      <div className={`sm:w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 rounded-2xl mx-auto ${clz2}`}>
          {children}
      </div>
    </div>
  );
}
export interface IContainer {
  children?: any;
  clz1?: string;
  clz2?: string;
}
