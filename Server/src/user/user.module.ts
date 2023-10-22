import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from '../post/entities/post.entity'
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  controllers: [],
  providers: [UserService],
  exports: [UserService]

})
export class UserModule {}
