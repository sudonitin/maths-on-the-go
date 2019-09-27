const mongoose = require('mongoose')
const db1 = require('../config/key').mongoUsersURI;
const db2 = require('../config/key').mongoLevelsURI;
const users = mongoose.createConnection(db1,{ useNewUrlParser: true });
const levels = mongoose.createConnection(db2,{ useNewUrlParser: true });

module.exports = {users,levels};