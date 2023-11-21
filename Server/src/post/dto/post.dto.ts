import { Length, IsString, MaxLength, MinLength } from 'class-validator';

export class PostDto {
    @IsString()
    readonly post:string;

}
    