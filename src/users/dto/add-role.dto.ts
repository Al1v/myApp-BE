import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'should be string' })
  readonly value: string;
  @IsNumber({}, { message: 'should be number' })
  readonly userId: number;
}
