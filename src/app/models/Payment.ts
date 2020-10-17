export class Payment {
  title: string;
  description: string;
  document?: string;
  payee: string;
  // tslint:disable-next-line:variable-name
  payment_date?: string;
  payer: string;
  // tslint:disable-next-line:variable-name
  payed_on?: string;
  remark: string;
  invoice?: string;
}
