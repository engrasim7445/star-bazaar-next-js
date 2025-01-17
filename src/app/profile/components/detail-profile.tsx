'use client';
import { getUser } from '@/core/redux/slice/user';
import { StrgClear } from '@/core/storage';
import { CardImageUtil, LinkFooter } from '@/shared';
import {
  AccountBalanceWallet,
  DrawTwoTone,
  Logout,
  PowerSettingsNewRounded,
} from '@mui/icons-material';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export function DetailProfile({ children }: any) {
  const router = useRouter();
  const dispatch = useDispatch()
  const logout = () => {
    StrgClear();
    dispatch(getUser({}))
    router.replace('/')
  }
  return (
    <div className="col-span-12 flex ">
      <CardImageUtil className="h-48 me-3" />
      <div className="w-full min-h-48 relative">
        <h2 className="flex text-orange ">
          <LinkFooter url="" lbl="Edit Profile">
            <DrawTwoTone className="me-3" />
          </LinkFooter>
          <LinkFooter url="/" lbl="Logout" icon="settings_power" onClick={logout}>
            <PowerSettingsNewRounded className="ms-10 me-3"  />
          </LinkFooter>
        </h2>
        <h2 className="text-xl  leading-none">Name of the Creator</h2>
        {children}
      </div>
    </div>
  );
}

export function WalletAmout() {
  return (
    <div className="bg-blue2 h-20 w-56 p-2 rounded-lg mt-1 absolute bottom-0">
      <h2 className="flex text-orange ">
        <LinkFooter
          url=""
          lbl="Wallet Balance"
        >
          <AccountBalanceWallet className="me-3" />
        </LinkFooter>
      </h2>
      <h2 className="text-2xl text-center text-green">PKR 10000000</h2>
    </div>
  );
}
