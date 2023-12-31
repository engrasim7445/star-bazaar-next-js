import { CardImageUtil, LinkFooter, ProfessionBage } from '@/shared';

export function DetailProfile({ children }: any) {
  return (
    <div className="col-span-12 flex ">
      <CardImageUtil className="h-48 me-3" />
      <div className="w-full min-h-48 relative">
        <h2 className="flex text-orange ">
          <LinkFooter
            url=""
            lbl="Edit Profile"
            icon="edit_square"
            className="me-6"
          />
          <LinkFooter url="" lbl="Logout" icon="settings_power" />
        </h2>
        <h2 className="text-xl  leading-none">
          Name of the Creator
        </h2>
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
          icon="account_balance_wallet"
          className="me-6"
        />
      </h2>
      <h2 className="text-2xl text-center text-green">PKR 10000000</h2>
    </div>
  );
}
