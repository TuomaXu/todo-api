export default (sequelize, DataTypes)=>{
    return sequelize.define('todo_user',{
        username:DataTypes.STRING,
        password:DataTypes.STRING,
        'access_token':DataTypes.STRING,
    });
}