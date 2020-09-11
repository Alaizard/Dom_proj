'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    generateSalt = () => {
      return crypto.randomBytes(256).toString('hex')
    }

    encryptPassword = (plainText, salt) => {
      return crypto
          .createHash('RSA-SHA256')
          .update(plainText)
          .update(salt)
          .digest('hex')
    }

    setSaltAndPassword = user => {
      if (user.changed('password')) {
          user.salt = User.generateSalt()
          user.password = User.encryptPassword(user.password(), user.salt())
      }
  }

  correctPassword = (enteredPassword) => {
    return User.encryptPassword(enteredPassword, this.salt()) === this.password()
}
  
  
};
User.init({
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: DataTypes.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  },
  hooks: {
    beforeCreate: () => setSaltAndPassword,
    beforeUpdate: () => setSaltAndPassword

    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};