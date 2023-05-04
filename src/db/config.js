const dotenv=require('dotenv');

dotenv.config();

const config={
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
    port:process.env.database_port
}
console.log(process.env.port)
module.exports.config=config;