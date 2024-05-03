import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Pauta {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  descricao: string;

  @CreateDateColumn()
  dataCadastro: Date;

  @Column({ type: "datetime", nullable: true })
  abertura?: Date;

  @Column({ type: "datetime", nullable: true })
  fechamento?: Date;
}