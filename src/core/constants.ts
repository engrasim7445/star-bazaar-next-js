// import { environment } from "src/environments/environment";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
export const isServer = (typeof window === 'undefined')? false : true

export const SHOUTOUT_MESSAGE = (o: { creator: string, receiver: string, by?: string, occasion: string, byGender: string, receiverGender: string, message: string }) => {
  return {
    ME: {
      ENG: `Happy ${o.occasion} ${o.receiver} from ${o.creator}`,
      URDU: `Hello ${o.receiver} this is ${o.creator} ${o.occasion} Mubarak`,
    },
    ELSE: {
      ENG: `Hello ${o.receiver} this is ${o.creator} Happy ${o.occasion} on Behalf of ${o.by} %%%%% Wishes For ${o.receiver} (Gender = ${o.receiverGender}) & Wishes From ${o.by} (Gender = ${o.byGender})`,
      URDU: `Hello ${o.receiver} this is ${o.creator} ${o.occasion} Mubarak on Behalf of ${o.by}`,
    }, 
    CUSTOM: {
      ME: `${o.message} %%%%%  Creator Name ${o.creator}`,
      ELSE_Swin: `${o.message} %%%%% Wishes For ${o.receiver} (Gender = ${o.receiverGender}) & Wishes From ${o.by} (Gender = ${o.byGender}) Creator Name ${o.creator}`,
      ELSE: `${o.message} %%%%% Wishes For ${o.receiver} (Gender = ${o.receiverGender}) & Wishes From ${o.by} (Gender = ${o.byGender})`,
    },
  }

}

export const MAX_VALIDATOR = 99999999999999.99;

// export async function AWS_BUCKET(body: any, contentType: string, Key: string){
//   const { S3 } = require("@aws-sdk/client-s3");
//   const options = {
//     queueSize: 360000, 
//     partSize: 52428800000
//   }
//   const params = {
//     Bucket: environment.awsStorageBucket.bucketName,
//     maxRetries: 10 ,
//     Key,
//     key: Key,
//     Body: body,
//     ACL: 'public-read',
//     ContentType: contentType,
//   };
//   const bucket = new S3(environment.awsStorageBucket);
//   console.log({bucket})
//   return await bucket.upload(params, options).promise()
// }
// WORKING HERE
// export async function AWS_BUCKET(body: any, contentType: string, Key: string) {
//   // https://wp.prodevhub.com/how-to-upload-files-to-s3-from-the-browser-angular/
//   let bucket: S3Client =  new S3Client(
//     {
//       credentials: {
//         accessKeyId: environment.awsStorageBucket.accessKeyId,
//         secretAccessKey: environment.awsStorageBucket.secretAccessKey,
//       },
//       region: environment.awsStorageBucket.region,
//     }
//   );
//   const options = {
//     queueSize: 360000,
//     partSize: 52428800000
//   }
//   const params = {
//     // UploadId: '123ASDFASDFESSDF',
//     Bucket: environment.awsStorageBucket.bucketName,
//     maxRetries: 10,
//     Key,
//     key: Key,
//     Body: body,
//     ACL: 'public-read',
//     ContentType: contentType,
//     // queueSize: 360000,
//     // partSize: 52428800000
//   };

//   // a client can be shared by different commands.
//   // const client = new S3Client(environment.awsStorageBucket);
//   try {
//     const data = await bucket.send(new PutObjectCommand(params))//as any;
//       const location = 'https://starbazaarpublicbucket.s3.us-east-1.amazonaws.com/';
//       return {
//       ...data,
//       Bucket: environment.awsStorageBucket.bucketName, 
//       Key,
//       key: Key,
//       Location: location + Key
//     };
//   } catch (e) {

//     console.log(e)
//     return {} as any
//   }
// }


export const INTRO_VIDEOS = [
  'https://dqc65nwcqwvpl.cloudfront.net/assets/standardshoutout.mp4',
  'https://dqc65nwcqwvpl.cloudfront.net/assets/personalshoutout.mp4',
  'https://dqc65nwcqwvpl.cloudfront.net/assets/businessshoutout.mp4'
]
export const BANNER = {
  LG: 'https://dqc65nwcqwvpl.cloudfront.net/new_banner_meta_1.webp',
  MD: 'https://dev.starbazaar.pk/assets/icon/banner-medium.webp',
  SM: ''
}

export const SOCIAL = {
  FACEBOOK: {
    LINK: 'https://www.facebook.com/starbazaar.pk/',
    IMG: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/icon/facebook.svg'
  },
  YOUTUBE: {
    LINK: 'https://www.youtube.com/channel/UCpeqOdFZLFdqjM_h1jFScig',
    IMG: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/icon/youtube.svg'
  },
  TIKTOCK: {
    LINK: 'https://www.tiktok.com/@starbazaar.pk',
    IMG: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/icon/tiktok.svg',
  },
  INSTA: {
    LINK: 'https://www.instagram.com/starbazaar.pk/',
    IMG: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/icon/insta.svg',
  },
  PLAYSTORE: {
    LINK: 'https://play.google.com/store/apps/developer?id=StarBazaar',
    IMG: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/icon/badge-google-play.png',
  },
  APPSTORE: {
    LINK: 'https://apps.apple.com/us/app/starbazaar/id1670553992',
    IMG: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/icon/badges-apstore.svg',
  },
  WHATS_APP: {
    LINK: 'https://wa.me/+923272582601',
    IMG: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/icon/contact.svg',
  }
}

export const SIMPAISA_STATUS: any = {
  in_review: "In Review",
  publishing: "Publishing",
  published: "Published",
  disbursed: "Disbursed",
  rejected: "Rejected",
  cancelled: "Cancelled",
  on_hold: "On Hold"
}
export const PAY_STATUS: any = {
  pending: 'Pending',
  expired: 'Expired',
  newOrder: 'New Order',
  declined: 'Declined',
  unPaid: 'Un Paid',
  paid: 'Paid',
  completed: 'Completed',
  accepted: 'Accepted',
  cancelled: 'Declined',
  refunded: 'Refund',
  ['']: '-',
  ['null']: 'Null',
  ['undefined']: '-',
};
export const PAY_STATUS_COLOR: any = {
  pending: 'text-primary',
  expired: 'text-secondary',
  newOrder: 'text-info',
  declined: 'text-danger',
  unPaid: 'text-warning',
  paid: 'text-success',
  completed: 'text-success',
  accepted: 'text-success',
  cancelled: 'text-warning',
  refunded: 'text-danger',
  in_review: 'text-secondary',
  publishing: 'text-info',
  published: 'text-success',
  disbursed: 'text-warning',
  rejected: 'text-danger',
  on_hold: 'text-warning',
  ['']: '',
  ['null']: '',
  ['undefined']: '',
};
export const BANK_NAME = {
  EASY_PAISA: '100007',
  JAZZ_CASH: '100008',
  HBL_KONNECT: '100014',
  ALFA_X: '100012',
  BANK_TRANSFER: '100018',
  VISA_MASTER_I: '100011',
  VISA_MASTER_II: '100013',
  IBFT: '100011',

}
export const BANK_KEY: any = {
  [BANK_NAME.EASY_PAISA]: {
    name: 'Easy Paisa',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/easypaisa_icon.svg'
  },
  [BANK_NAME.JAZZ_CASH]: {
    name: 'Jazz Cash',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/mobilink_icon@2x.png',
  },
  [BANK_NAME.HBL_KONNECT]: {
    name: 'HBL Konnect',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/NoPath@2x.png'
  },
  [BANK_NAME.ALFA_X]: {
    name: 'Alfa X',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/bankalfalah_icon@2x.png'
  },
  [BANK_NAME.BANK_TRANSFER]: {
    name: 'Bank Transfer',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/bank.svg'

  },
  [BANK_NAME.VISA_MASTER_I]: {
    name: 'Visa / Master Card',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/bank.svg'
  },
  [BANK_NAME.VISA_MASTER_II]: {
    name: 'Visa / Master Card',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/paymentMethod@2x.png'
  },
  [BANK_NAME.IBFT]: {
    name: 'IBFT',
    image: 'https://dqc65nwcqwvpl.cloudfront.net/frotendassets/images/payment-icon/paymentMethod@2x.png'
  },
  'undefined': {
    name: '-',
    image: '../../../'
  },
  'null': {
    name: '-',
    image: '../../../'
  }
};
export const Print_Settings = {
  printMode: 'template-popup',
  popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
  pageTitle: 'Shoutout Print Out',
  // templateString: '<header>I\'m part of the template header</header>{{printBody}}<footer>I\'m part of the template footer</footer>',
  stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
  styles: [
    'td { border: 1px solid black; color: green; }',
    'table { border: 1px solid black; }',
    'header, table, footer { margin: auto; text-align: center; }',
    'pagination-controls { visibility: hidden;}',
  ]
}

export function iOS(): any {
  if (document) {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator?.userAgent?.includes("Mac") && "ontouchend" in document)
  }

}
