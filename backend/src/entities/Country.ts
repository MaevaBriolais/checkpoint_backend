import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
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
