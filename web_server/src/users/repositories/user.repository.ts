import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(user: User): Promise<User> {
    console.log(user);
    const newUser = this.save(user);
    return newUser;
  }
  // Thêm các phương thức tương tác với bảng User khác nếu cần
}
