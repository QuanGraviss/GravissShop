export class CreateUserDto {
  IdUser: number;
  Email: string;
  PhoneNumber: string;
  FullName: string;
  Password: string;
  DateOfBirth: Date;
  Address: string;
  Role: string;
  IsActive: boolean;
}
