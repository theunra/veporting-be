import { DataSource } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Report} from "./entity/Report";
import { User } from "./entity/User";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "10.8.0.1",
    port: 5432,
    username: "veporting",
    password: "veporting-admin",
    database: "veporting_db",
    synchronize: true, //TESTING
    // logging: true,
    entities: [Report, User]
});