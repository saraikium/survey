'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAnswer = sequelize.define('UserAnswer', {
    userId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER
  }, {});
  UserAnswer.associate = function(models) {
    // associations can be defined here
  };
  return UserAnswer;
};