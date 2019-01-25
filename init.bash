sequelize model:generate --name user \
    --attributes firstName:string,lastName:string,email:string

sequelize model:generate --name task \
    --attributes title:string

sequelize db:migrate