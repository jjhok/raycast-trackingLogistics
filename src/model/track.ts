export interface Detail {
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

export interface RootObject {
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
  details: Detail[];
}
