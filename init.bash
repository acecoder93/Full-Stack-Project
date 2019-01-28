sequelize model:generate --name Session --attributes expire:date,data:string
sequelize model:generate --name users --attributes username:string,password:string,email:string
sequelize model:generate --name todos --attributes tasks:string,uid:integer

