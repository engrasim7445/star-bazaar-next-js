'use client';
import { dialogHide, dialogShow } from '@/core/redux/slice/dialogz';
import { LinkNav } from '@/shared';
import { Person2Rounded, Star } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

export function NavCustomerLogin() {
  const dispatch = useDispatch();
  const dialogz = useSelector((state: any) => state.dialogz);

  const dialogOpen = () => {
    console.log('LoginCustomer Called')
    dispatch(dialogShow({LoginCustomer: true}));
    console.log(dialogz)
  };
  return (
    <LinkNav lbl="Customer Login" icon="person" url="#customer_login" onClick={dialogOpen} >
      <Person2Rounded className='flex place-self-center' />
    </LinkNav>
  );
}
export function NavCreatorLogin() {
  const dispatch = useDispatch();
  const dialogOpen = () => {
    dispatch(dialogShow({LoginCreator: true}));
  };
  return (
    <LinkNav lbl="Creator Login" icon="star" url="#creator_login" onClick={dialogOpen}>
      <Star className='flex place-self-center'/>
    </LinkNav>
  );
}
export function NavBusinessLogin() {
  const dispatch = useDispatch();
  const dialogOpen = () => {
    dispatch(dialogShow({LoginBusiness: true}));
  };
  return (
    <LinkNav lbl="Business Login" icon="star" url="#business_login" onClick={dialogOpen}>
      <Person2Rounded className='flex place-self-center' />
    </LinkNav>
  );
}
