export default (sequelize, DataTypes)=>{
    return sequelize.define('todo',{
        title:DataTypes.STRING,
        content:DataTypes.STRING,
        isFinish:DataTypes.BOOLEAN,
    });
}