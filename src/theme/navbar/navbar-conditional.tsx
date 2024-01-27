import { NavbarPublic } from './navbar-public';
import { NavBar } from './navbar';
import { isPublicUrl } from '@/utils/essentials';
// import { NavBar, NavbarPublic } from '.';

export function NavbarConditional() {
  const isPublic = isPublicUrl()
  return <>{isPublic ? <NavbarPublic /> : <NavBar />}</>;
}
