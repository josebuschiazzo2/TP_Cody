import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'C3ss4r23',
      database: 'cody',
      entities: [__dirname + '/**/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}