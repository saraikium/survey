"use strict";
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "Answer",
    {
      answerText: {
        type: DataTypes.STRING,
        allowNull: false
      },

      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Answer.associate = function(models) {
    Answer.belongsTo(models.Question, {
      as: "question",
      foreignKey: "questionId",
      foreignKeyConstraint: true
    });
    Answer.belongsToMany(models.User, {
      through: "UserAnswers",
      as: "answers",
      foreignKey: "answerId",
      otherKey: "userId",
      foreignKeyConstraint: true
    });
  };
  return Answer;
};
