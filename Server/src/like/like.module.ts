import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Like } from './entities/like.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Like, Post, User])],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
