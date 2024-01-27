export function NavbarFooter(){
  return (
    <div className="container-fluid bg-nav2">
      {/* <BtnLink url='/web/contact-us' lbl="Contact Us" />
      <BtnRoute url="/web/about" lbl="About" /> */}

    </div>
  )
}

// <!-- background-color: #0a0836ab; -->
// <footer  style=" backdrop-filter: blur(3px); 
//   border-radius: 7px 7px 0px 0px; 
//   border-top:1px solid #ffffff63;
//   background: linear-gradient(0deg, #0a0836c2 22%,#0e0a53ab 55%) 0% 0% no-repeat padding-box;" 
//   class="px-2 sticky-bottom s-sm" *ngIf="!storage?.user?.type">
//   <!-- [ngClass]="{'sticky-bottom': !isScrollingUp || !util.isSmall}" -->
//   <div class="container">
//     <div class="row footer-row">
//       <div class="navbar my-1" style="margin: 0px;">
//         <div (click)="openCustomerLoginFormModal()"  *ngIf="!storage?.user?.type"
//           style="color: white; display: grid; text-align: center; line-height: 14px; font-size: 12px;">
//           <i class="fa fa-user" style="color: #e96343; font-size: 17px;"></i>Customer Login
//         </div>
//         <div (click)="openLoginFormModal({userType:'business'})" *ngIf="!storage?.user?.type"
//           style="color: white; display: grid; text-align: center; line-height: 14px; font-size: 12px">
//           <i class="fa fa-briefcase" style="color: #e96343; font-size: 17px;"></i>Business  Login
//         </div>
//         <a (click)="openLoginFormModal({userType: 'creator'})" *ngIf="!storage?.user?.type"
//           style="color: white; display: grid; text-align: center; line-height: 14px; font-size: 12px">
//           <img src="../../../../assets/svg/star.svg" style="margin-left:25px" >Creator  Login
//         </a>
//       </div>
//     </div>
//   </div>
// </footer>