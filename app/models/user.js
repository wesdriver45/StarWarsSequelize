module.exports = function(sequelize, DataTypes) {
	var User = sequelize.deving("User", {
		email: DataTypes.STRING,
		password: DataTypes.STRING
	});
	return User;
};