import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  username: string;

  @Column()
  @Index()
  email: string;

  @Column()
  password: string;

  @Column()
  @Index()
  name: string;

  @Column()
  date: number;
  @Column()
  month: number;
  @Column()
  year: number;
}
