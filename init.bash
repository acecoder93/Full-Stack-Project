sequelize model:generate --name users --attributes username:string,password:string
sequelize model:generate --name todos --attributes tasks:string,uid:integer

# sequelize db:migrate