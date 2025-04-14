import "reflect-metadata";
import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  entities: [Country],
  logging: false,
  synchronize: true,
});
