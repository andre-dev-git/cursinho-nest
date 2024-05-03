import { IsString, MinLength } from "class-validator";

export class CriarPautaResource {
  @IsString()
  @MinLength(3, {message: "VAMOOO"})
  descricao: string;
}