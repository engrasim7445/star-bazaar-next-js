import { isPublicUrl } from '@/core/essentials';
import { NavbarPublic } from './navbar-public';
import { NavBar } from './navbar';
// import { NavBar, NavbarPublic } from '.';

export function NavbarConditional() {
  const isPublic = isPublicUrl()
  return <>{isPublic ? <NavbarPublic /> : <NavBar />}</>;
}
