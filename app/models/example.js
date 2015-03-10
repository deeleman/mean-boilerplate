'use strict';

var db = require('../lib/db');
var crypto = require('crypto');

/**
 * exampleSchema describes by means of a common agnostic example how to persist a Mongoose schema.
 * @type Mongoose Schema
 */
var exampleSchema = db.Schema({
    field1: { type: String, required: true },
    field2: { type: String, required: true },
    field3: { type: String },
    field4: { type: String },
    field5: { type: String },
    field6: {
        childField1: { type: String },
        childField2: { type: String },
        childField3: { type: String },
        childField4: { type: String }
    },
    field7: {
        childField1: { type: Number },
        childField2: { type: Number }
    },
    field8: { type: Date, default: Date.now },
    avatar: { type: String }
});

/**
 * avatarDecorator is a formal example of how to harness MongoDB and Mongoose
 * support for MongoDB methods consuming 3rd party services
 */
exampleSchema.methods.avatarDecorator = function() {
    var url = 'http://www.gravatar.com/avatar/';
    var email = this.field1;
    url += crypto.createHash('md5')
        .update(email)
        .digest('hex');
    this.avatar = url;
};

var Example = db.model('Example', exampleSchema);

module.exports = Example;
