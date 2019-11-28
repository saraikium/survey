"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
      },
      education: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Answer, {
      through: "UserAnswers",
      as: "users",
      foreignKey: "userId",
      otherKey: "answerId",
      foreignKeyConstraint: true
    });
  };
  return User;
};
