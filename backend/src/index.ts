import "reflect-metadata";
import { AppDataSource } from "./config/db";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CountryResolver } from "./resolvers/CountryResolver";

const port = 3000;

const start = async () => {
	await AppDataSource.initialize();

	const schema = await buildSchema({
		resolvers: [CountryResolver],
	});

	const apiServer = new ApolloServer({ schema });

	const { url } = await startStandaloneServer(apiServer, {
		listen: { port: port },
	});
	console.log("Hey, it's ok ! =D");
	console.log(url);
};
start();