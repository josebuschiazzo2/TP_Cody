import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
     host: 'localhost',
     port: 3306,
      username: 'root',
     password: 'Misql8',
     database: 'cody',
     entities: [__dirname + '/**/**/**.entity{.ts,.js}'],
     synchronize: true,

     // DATOS DE CLEVER-CLOUD 
      // type: 'mysql',
      // host: 'by0jpbjyhjn3np6igfrg-mysql.services.clever-cloud.com',
      // port: 3306,
      // username: 'ua4370yiuq8dc5be',
      // password: 'im3QjrTAF1KDne5var0B',
      // database: 'by0jpbjyhjn3np6igfrg',
      // entities: [__dirname + '/**/**/**.entity{.ts,.js}'],
      // synchronize: true,
    }),
    UserModule,
    AuthModule,
    PostModule,
    CommentModule,
    LikeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}