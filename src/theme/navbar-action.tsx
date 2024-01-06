'use client';
import { LinkNav } from '@/shared';
import { Person2Rounded, Star, StarBorderOutlined } from '@mui/icons-material';

export function NavCustomerLogin() {
  return (
    <LinkNav lbl="Customer Login" icon="person" url="#customer_login">
      <Person2Rounded className='flex place-self-center' />
    </LinkNav>
  );
}
export function NavCreatorLogin() {
  return (
    <LinkNav lbl="Creator Login" icon="star" url="#creator_login">
      <Star className='flex place-self-center'/>
    </LinkNav>
  );
}
export function NavBusinessLogin() {
  return (
    <LinkNav lbl="Business Login" icon="star" url="#business_login">
      <Person2Rounded className='flex place-self-center' />
    </LinkNav>
  );
}
