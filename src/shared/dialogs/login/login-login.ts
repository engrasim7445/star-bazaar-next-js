import { StrgKey, StrgSet } from "@/core/storage";
import { HttpPOST } from "@/http/http";
import { Success } from "@/utils/alertz";

export function Login({password, email, userType}: any) {
  let dto: any = {
    email,
    password,
    userType,
    type: 'email',
  }
  // if (this.addUpdateForm.valid) {
  if (!password) return Error('Please enter password');
  if (!email) return Error('Please enter email')
  HttpPOST({
    ep: '',
    body: dto,
  }).then((res) => {
    console.log(res)
    const { isSuccess, data, token } = res;
    if (isSuccess) {
      Success('Login Successfull')
      StrgSet(StrgKey.USER, data.user)
      StrgSet(StrgKey.TOKEN, token.accessToken)
      // this.analytics.Log_In('user_login', 'Register with Email', .data?.user?._id);
    }
  })
}
// loginWithGoogle() {
//   this.GoogleAuth();
//   let info = {
//     email: this.tempGoogleUser.email ? this.tempGoogleUser.email : '',
//     platform: 'google',
//     uid: this.tempGoogleUser.uid ? this.tempGoogleUser.uid : '',
//     token: this.tempGoogleUser.auth.currentUser.accessToken
//       ? this.tempGoogleUser.auth.currentUser.accessToken
//       : '',
//     fullName: this.tempGoogleUser.displayName
//       ? this.tempGoogleUser.displayName
//       : '',

//     phone: this.tempGoogleUser.phoneNumber
//       ? this.tempGoogleUser.phoneNumber
//       : '',

//     photoUrl: this.tempGoogleUser.photoURL
//       ? this.tempGoogleUser.photoURL
//       : '',

//   };
//   this.http.socialLogin(info).subscribe({
//     next: (response: any) => {
//       const { isSuccess, data } = response;
//       if (isSuccess) {
//         const { token } = data;
//         this.accessToken = this.tempGoogleUser.auth.currentUser.accessToken;
//         this.storage.setUser(response.data.user);
//         this.storage.setToken(
//           this.tempGoogleUser.auth.currentUser.accessToken
//         );
//         this.analytics.Log_In('user_login', 'Register with Gmail', info.uid);

//         if (this.data) {
//           this.ngZone.run(() => {
//             this.dialogRefs.close(this.data);
//           });
//         } else {
//           this.ngZone.run(() => {
//             this.dialogRefs.close();
//           });
//           if (response.data.user.type === userType.creator) {
//             this.routing.goToCreatorProfile();
//           } else if (response.data.user.type === userType.customer) {
//             this.routing.goToCustomerProfile();
//           }
//         }
//         this._alert.success(response.message);
//         return of(response);
//       }
//       this.showLoader = false;
//       return of(response);
//     },
//     complete: () => this.showLoader = false
//   });
// }
// loginWithApple() {
//   try {
//     const provider = new OAuthProvider('apple.com');
//     provider.addScope('email');
//     provider.addScope('name');
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         const credential = OAuthProvider.credentialFromResult(result);
//         const accessToken = credential!.accessToken;
//         const idToken = credential!.idToken;
//         this.tempAppleUser = user;

//         let info = {
//           email: this.tempAppleUser.providerData[0].email ? this.tempAppleUser.providerData[0].email : `${this.tempAppleUser.uid}@icloud.com`,
//           platform: "apple",
//           uid: this.tempAppleUser.uid ? this.tempAppleUser.uid : '',
//           token: this.tempAppleUser.auth.currentUser.accessToken ? this.tempAppleUser.auth.currentUser.accessToken : '',
//           fullName: this.tempAppleUser.displayName ? this.tempAppleUser.displayName : '',
//           phone: this.tempAppleUser.phoneNumber ? this.tempAppleUser.phoneNumber : '',
//           photoUrl: this.tempAppleUser.photoURL ? this.tempAppleUser.photoURL : '',
//         }
//         this.http.socialLogin(info).subscribe({
//           next: (response: any) => {
//             const { isSuccess, data } = response;
//             if (isSuccess) {
//               const { token } = data;
//               this.accessToken = this.tempAppleUser.auth.currentUser.accessToken;
//               this.storage.setUser(response.data.user);
//               this.storage.setToken(this.tempAppleUser.auth.currentUser.accessToken);
//               this.analytics.Log_In('user_login', 'Register with Apple', info.uid);
//               if (this.data) {
//                 this.ngZone.run(() => {
//                   this.dialogRefs.close(this.data);
//                 });
//               } else {
//                 this.ngZone.run(() => {
//                   this.dialogRefs.close();
//                 });
//                 if (response.data.user.type === userType.creator) {
//                   this.routing.goToCreatorProfile();
//                 } else if (response.data.user.type === userType.customer) {
//                   this.routing.goToCustomerProfile();
//                 }
//               }
//               this._alert.success(response.message);
//               return of(response);
//             }
//             return of(response);
//           },
//           complete: () => this.showLoader = false
//         });
//       })
//       .catch((error) => {
//         const credential = OAuthProvider.credentialFromError(error);
//       });
//   } catch (e) {
//     console.log(e);
//   }
// }
// loginWithFacebook() {
//   try {
//     const provider = new FacebookAuthProvider();
//     const auth = getAuth();
//     provider.addScope('email');
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accessToken = credential!.accessToken;
//         this.tempFacebookUser = user;
//         let info = {
//           email: this.tempFacebookUser.providerData[0].email ? this.tempFacebookUser.providerData[0].email : `${this.tempFacebookUser.uid}@facebook.com`,
//           platform: "facebook",
//           uid: this.tempFacebookUser.uid ? this.tempFacebookUser.uid : '',
//           token: this.tempFacebookUser.auth.currentUser.accessToken ? this.tempFacebookUser.auth.currentUser.accessToken : '',
//           fullName: this.tempFacebookUser.displayName ? this.tempFacebookUser.displayName : '',
//           phone: this.tempFacebookUser.phoneNumber ? this.tempFacebookUser.phoneNumber : '',
//           photoUrl: this.tempFacebookUser.photoURL ? this.tempFacebookUser.photoURL : '',
//         }
//         this.http.socialLogin(info).subscribe({
//           next: (response: any) => {
//             const { isSuccess, data } = response;
//             if (isSuccess) {
//               const { token } = data;
//               this.accessToken = this.tempFacebookUser.auth.currentUser.accessToken;
//               this.storage.setUser(response.data.user);
//               this.storage.setToken(this.tempFacebookUser.auth.currentUser.accessToken);
//               this.analytics.Log_In('user_login', 'Register with Facebook', info.uid);

//               if (this.data) {
//                 this.ngZone.run(() => {
//                   this.dialogRefs.close(this.data);
//                 });
//               } else {
//                 this.ngZone.run(() => {
//                   this.dialogRefs.close();
//                 });
//                 if (response.data.user.type === userType.creator) {
//                   this.routing.goToCreatorProfile();
//                 } else if (response.data.user.type === userType.customer) {
//                   this.routing.goToCustomerProfile();
//                 }
//               }
//               this._alert.success(response.message);
//               return of(response);
//             }
//             return of(response);
//           },
//           complete: () => this.showLoader = false
//         });
//       })
//       .catch((error) => {
//         FacebookAuthProvider.credentialFromError(error);
//       });
//   } catch (e) {
//     console.log(e);
//   }
// }
// googleLoginInfo() {
//   try {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     provider.addScope('email');
//     signInWithPopup(auth, provider)
//       .then((result) => {

//         const user = result.user;
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const accessToken = credential!.accessToken;
//         this.tempGoogleUser = user;
//         let info = {
//           email: this.tempGoogleUser.providerData[0].email ? this.tempGoogleUser.providerData[0].email : '',
//           platform: 'google',
//           uid: this.tempGoogleUser.uid ? this.tempGoogleUser.uid : '',
//           token: this.tempGoogleUser.auth.currentUser.accessToken
//             ? this.tempGoogleUser.auth.currentUser.accessToken
//             : '',
//           fullName: this.tempGoogleUser.displayName
//             ? this.tempGoogleUser.displayName
//             : '',

//           phone: this.tempGoogleUser.phoneNumber
//             ? this.tempGoogleUser.phoneNumber
//             : '',

//           photoUrl: this.tempGoogleUser.photoURL
//             ? this.tempGoogleUser.photoURL
//             : '',
//         };
//         this.http.socialLogin(info).subscribe({
//           next: (response: any) => {
//             this.showLoader = false;
//             const { isSuccess, data } = response;
//             if (isSuccess) {
//               const { token } = data;
//               this.accessToken = this.tempGoogleUser.auth.currentUser.accessToken;
//               const refreshToken = this.tempGoogleUser.auth.currentUser.refreshToken;
//               // setTokenAutoRefreshEnabled()
//               this.analytics.Log_In('user_login', 'Register with Google', info.uid);

//               console.info({ refreshToken })
//               this.storage.setUser(response.data.user);
//               this.storage.setToken(
//                 this.tempGoogleUser.auth.currentUser.accessToken
//               );
//               this.storage.setProperty(StorageKeys.refreshToken, refreshToken)
//               if (this.data) {
//                 this.ngZone.run(() => {
//                   this.dialogRefs.close(this.data);
//                 });
//               } else {
//                 this.ngZone.run(() => {
//                   this.dialogRefs.close();
//                 });
//                 if (response.data.user.type === userType.creator) {
//                   this.routing.goToCreatorProfile();
//                 } else if (response.data.user.type === userType.customer) {
//                   this.routing.goToCustomerProfile();
//                 }
//               }
//               this._alert.success(response.message);
//               return of(response);
//             }
//             return of(response);
//           },
//           complete: () => this.showLoader = false
//         });
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//       });
//   } catch (e) {
//   }

// }
// async GoogleAuth() {
//   var response = await this.authLogin(new auth.GoogleAuthProvider());
//   this.tempGoogleUser = response.user;
// }
// async authLogin(provider: any) {
//   return await this.afAuth.signInWithPopup(provider);
// }
// validateEmail(email: any) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
// goToCustomerSignUp() {
//   this.dialogRefs.close();
//   if (this.starId) {
//     const data: any = {
//       infoData: JSON.stringify(this.data),
//     };
//     // Open Popup
//     this.routing.goToEditCustomerSignUp(data);
//   } else {
//     // Redirect to Sign up Customer Route
//     this.routing.goToCustomerSignUp();
//   }
// }
// gotoForgetPassword() {
//   this.dialogRefs.close();
//   this.router.navigate(['public', 'forgot-password']);
// }
// set accessToken(token: string) {
//   localStorage.setItem('accessToken', token);

//   this.accessTokenSubject.next(token);
// }
// get accessToken(): string {
//   return localStorage.getItem('accessToken') ?? '';
// }