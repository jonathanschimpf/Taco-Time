var orm = require("../config/orm.js");



var taco = {


all: function() {

    orm.all({});

},

create: function () {

    orm.create({});

},

update: function () {

    orm.update({});

},

remove: function () {

    orm.remove({});

}


};



module.exports =taco;