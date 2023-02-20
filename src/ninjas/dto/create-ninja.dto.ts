import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['stars', 'nunchakus'], { message: 'use Correct weapon' })
  weapon: string;

  id: number;
}
