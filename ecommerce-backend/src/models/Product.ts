import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: "This is a sample product" })
  description: string;

  @Column({ type: "int", default: 0 })
  price: number;

  @Column({ type: "int", default: 0 })
  inventory: number;
}
