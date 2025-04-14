import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Field, InputType } from "type-graphql";
import { Country } from "../entities/Country";
import { AppDataSource } from "../config/db";

@InputType()
class CountryInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  continentCode!: string;
}

@Resolver(Country)
export class CountryResolver {
  
    @Query(() => [Country])
    async getCountries() {
      return await Country.find();
    }

    @Query(() => Country, { nullable: true })
    async getCountry(@Arg("code") code: string) {
      return await Country.findOneBy({ code });
    }

    @Query(() => [Country])
    async getCountriesByContinent(@Arg("continentCode") continentCode: string) {
      return await Country.find({
        where: { continentCode },
      });
    }

    @Mutation(() => Country)
    async addCountry(@Arg("data") data: CountryInput) {
      const country = Object.assign(new Country(), data);
      await Country.save(country);
      return country;
    }
}
