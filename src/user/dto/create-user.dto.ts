export class CreateUserDto {
  username: string;
  email: string;
  password: string;
  dob: {
    date: number;
    month: number;
    year: number;
  };
  name: string;
}
