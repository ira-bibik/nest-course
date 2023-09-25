import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: 'Email' })
    readonly email: string;
    @ApiProperty({ example: 'qwerty123', description: 'password' })
    readonly password: string;
}
