import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendContactMailDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
