"use strict";
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      questionText: {
        type: DataTypes.STRING,
        allowNull: false
      },
      questionType: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Question.associate = function(models) {
    // associations can be defined here
    Question.hasMany(models.Answer, {
      as: "answers",
      foreignKey: "questionId",
      foreignKeyConstraint: true
    });
  };
  return Question;
};
