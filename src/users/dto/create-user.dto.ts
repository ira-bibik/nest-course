import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: 'Email' })
    @IsString({ message: 'Email must be a string' })
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string;

    @ApiProperty({ example: 'qwerty123', description: 'password' })
    @IsString({ message: 'Password must be a string' })
    @Length(4, 16, {
        message:
            'Password must be not less than 4 characters and not bigger than 16 characters',
    })
    readonly password: string;
}
