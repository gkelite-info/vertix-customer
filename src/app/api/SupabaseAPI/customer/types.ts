export interface Dependent {
  firstName: string;
  middleName?: string;
  lastName: string;
  dob: string;
  months: string;
  depOneSSN: string;
  date: string;
  isUSCitizen: boolean;
  notes: string;
  idType: "SSN" | "ITIN" | "NEED TO APPLY";
  hasChildcare: boolean;
}
