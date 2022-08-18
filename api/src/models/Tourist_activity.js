const {DataTypes} =require('sequelize')


module.exports = (sequelize) =>{

 sequelize.define('Tourist_activity',{
    id:{
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
      validate: {   
        min: 1,                  
        max: 5
      }
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
      }
 },
 {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
 )
};
