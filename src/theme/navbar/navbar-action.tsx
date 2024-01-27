'use client';
import { dialogShow } from '@/core/redux/slice/dialogz';
import { LinkNav } from '@/shared';
import { Person2Rounded, Star } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

export function NavCustomerLogin({isHide}: any) {
  const dispatch = useDispatch();
  const dialogz = useSelector((state: any) => state.dialogz);

  const dialogOpen = () => {
    dispatch(dialogShow({LoginCustomer: true}));
  };
  return (
    <LinkNav lbl="Customer Login" icon="person" url="#customer_login" onClick={dialogOpen} isHide={isHide} >
      <Person2Rounded className='flex place-self-center' />
    </LinkNav>
  );
}
export function NavCreatorLogin({isHide}: any) {
  const dispatch = useDispatch();
  const dialogOpen = () => {
    dispatch(dialogShow({LoginCreator: true}));
  };
  return (
    <LinkNav lbl="Creator Login" icon="star" url="#creator_login" onClick={dialogOpen} isHide={isHide}>
      <Star className='flex place-self-center'/>
    </LinkNav>
  );
}
export function NavBusinessLogin({isHide}: any) {
  const dispatch = useDispatch();
  const dialogOpen = () => {
    dispatch(dialogShow({LoginBusiness: true}));
  };
  return (
    <LinkNav lbl="Business Login" icon="star" url="#business_login" onClick={dialogOpen} isHide={isHide}>
      <Person2Rounded className='flex place-self-center' />
    </LinkNav>
  );
}
