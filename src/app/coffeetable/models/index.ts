export type functionString = string;

export type DisplayValue = (
  string
  | functionString
  | number
  | undefined
  | boolean
  | null
  | void
);

export interface Record {
  data: any;
}

export interface Field {
  getter: functionString;
  name: string;
  setter: functionString;
}

export interface Collection {
  fields: Field[];
  filterOn: functionString;
  orderOn: functionString;
  records: Record[];
}
