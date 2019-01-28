<<<<<<< HEAD
sequelize model:generate --name Session --attributes expire:date,data:string
sequelize model:generate --name users --attributes username:string,password:string,email:string
sequelize model:generate --name todos --attributes tasks:string,uid:integer

=======
sequelize model:generate --name user \
    --attributes firstName:string,lastName:string,email:string

sequelize model:generate --name task \
    --attributes title:string

sequelize db:migrate
>>>>>>> Raul
