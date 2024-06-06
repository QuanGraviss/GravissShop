import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  IdUser: number;

  @Column()
  Email: string;

  @Column()
  PhoneNumber: string;

  @Column()
  FullName: string;

  @Column()
  Password: string;

  @Column({ default: new Date().toISOString().slice(0, 10) }) // Sử dụng hàm SQL để lấy ngày hiện tại
  DateOfBirth: string;

  //   @Column()
  //   address: string;

  // address notnull with default value is "Pleiku"
  @Column()
  Address: string;

  @Column({ default: 'user' })
  Role: string;

  @Column({ default: true })
  IsActive: boolean;
}
