export interface ILocalUser {
  id?: string;
  _id?: string;
  name: string;
  username: string;
  email?: string;
  password?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: number;
      lng?: number;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
