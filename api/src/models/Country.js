const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,  //para no pisar con el id de las recetas de la api
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sub_region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
  );
};
