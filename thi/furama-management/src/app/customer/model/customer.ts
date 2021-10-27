import {CustomerType} from "./customer-type";

export interface Customer {
  id: number;
  code: string;
  name:string;

  go: string;
  to: string;
  phone: string;
  email: string;
  timeGo: string;
  timeTo: string;

  customerType: CustomerType;

}

// name: string;
// gender: string;
// birthday: string;
// idCard: string;
// phone: string;
// email: string;
// address: string;
