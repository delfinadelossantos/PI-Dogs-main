const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      min_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      min_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false, //Sino Sequelize crea por defecto hora y fecha de creación
    }
  );
};
