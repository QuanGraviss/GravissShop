import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'; // Import UsersModule
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'your_secret_key', // Thay thế bằng secret key của bạn
      signOptions: { expiresIn: '1h' }, // Tuỳ chỉnh token expiration
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
