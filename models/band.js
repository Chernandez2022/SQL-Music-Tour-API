// DEPENDENCIES
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  // MODEL
  class Band extends Model {
    static associate({ MeetGreet, SetTime }) {
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets",
      });

      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        set_time: "set_times",
      });
    }
  }

  Band.init(
    {
      band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Band",
      tableName: "bands",
      timestamps: false,
    }
  );

  return Band;
};
// EXPORT//
//module.exports = Band;
