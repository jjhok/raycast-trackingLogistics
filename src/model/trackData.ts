export interface ITrackData {
  id: string;
  vendorId: number;
  senderName: string;
  receiverName: string;
  itemName: string;
  invoiceNo: string;
  receiverAddr: string;
  level: string;
  recipient: string;
  completeYN: string;
  details: TrackingDetail[];
}

export interface TrackingDetail {
  trackingDate: string;
  trackingTime: string;
  trackingTimeString: string;
  trackingWhere: string;
  trackingKind: string;
  trackingDescription: string;
  trackingTelno: string;
  trackingTelno2: string;
  trackingLevel: string;
  trackingManName: string;
  trackingManPic: string;
}

// export interface LastStateDetail {
//   time: number;
//   timeString: string;
//   where: string;
//   kind: string;
//   telno: string;
//   telno2: string;
//   level: number;
//   manName: string;
//   manPic: string;
// }

// export interface LastDetail {
//   time: number;
//   timeString: string;
//   where: string;
//   kind: string;
//   telno: string;
//   telno2: string;
//   level: number;
//   manName: string;
//   manPic: string;
// }

// export interface FirstDetail {
//   time: number;
//   timeString: string;
//   where: string;
//   kind: string;
//   telno: string;
//   telno2: string;
//   level: number;
//   manName: string;
//   manPic: string;
// }
