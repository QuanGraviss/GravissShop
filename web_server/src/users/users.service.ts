import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserRepository } from './repositories/user.repository'; // Import UserRepository

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // Inject UserRepository vào UserService
    private readonly userRepository: Repository<User>, // Inject UserRepository, không phải Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(
      createUserDto.Password,
      saltOrRounds,
    );
    // convert CreateUserDto to User
    const user = new User();
    user.Email = createUserDto.Email;
    user.PhoneNumber = createUserDto.PhoneNumber;
    user.FullName = createUserDto.FullName;
    user.Password = passwordHash;
    // dateOfBirth notnull with default value is "2000-01-01"
    user.DateOfBirth = '2000-01-01';
    user.Address = createUserDto.Address;
    user.Role = 'User';
    user.IsActive = true;
    return await this.userRepository.save(user); // Sử dụng phương thức createUser từ UserRepository
  }
}
