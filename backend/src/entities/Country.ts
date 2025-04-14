import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class Country {
  @Field()
  @PrimaryColumn()
  code!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  @Field()
  @Column()
  continentCode!: string;
}
