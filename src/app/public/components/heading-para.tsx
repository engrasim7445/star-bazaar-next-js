import { LinkFragement } from '@/shared';

export function P({ children }: any) {
  return <p className="pb-2 text-xl text-justify cursor-default hover:text-yellow-300 transition-colors ease-linear duration-200">{children}</p>;
}
export function H2({ children, fragment }: any) {
  return (
    <LinkFragement fragment={fragment}>
      <h2 id={fragment} className="text-2xl my-1 text-orange ">{children}</h2>
    </LinkFragement>
  );
}

export function OL_a({ children }: any) {
  return (
    <ol
      type="a"
      className="list-inside mx-5 "
      style={{ listStyle: 'lower-alpha', listStylePosition: 'inside' }}
    >
      {children}
    </ol>
  );
}
export function OL_i({ children }: any) {
  return (
    <ol
      className="list-inside mt-3 me-10 ms-14 "
      type="i"
      style={{ listStyle: 'lower-roman', listStylePosition: 'outside' }}
    >
      {children}
    </ol>
  );
}
export function LI({ children, className }: any) {
  return <li className={`mb-2 cursor-default hover:text-yellow-300 transition-colors ease-linear duration-200 ${className}`}>&ensp;{children}</li>;
}
