import { DataTypes } from "sequelize";

export default (sequelize) =>
  sequelize.define(
    "users_test_lautarozalazar",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middleName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paternalLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maternalLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );
