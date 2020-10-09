
// import MySQL connection from connection.js

var connection = require("../config/connection.js");


// this function loops through and creates an array of..
//.. question marks - ["?", "?", "?"] - and turns it into a string.

// ["?", "?", "?"].toString() => "?,?,?";

const printQuestionMarks = num => {

    let arr = [];

    for (let i = 0; i < num; i++) {

        arr.push("?");

    }

    return arr.toString();

}


// this function helps to convert object key/value pairs to SQL syntax

function objToSql(ob) {

    var arr = [];

    // loop through the keys and push the key/value as a string int arr

    for (var key in ob) {

        var value = ob[key];

        // check to skip hidden properties

        if (Object.hasOwnProperty.call(ob, key)) {

            // if string with spaces, add quotations (Tacos Al Pastor => 'Tacos Al Pastor')

            if (typeof value === "string" && value.indexOf(" ") >= 0) {

                value = "'" + value + "'";

            }

            // e.g. {name: 'Tacos Al Pastor'} => ["name='Tacos Al Pastor'"]

            // e.g. {devoured: true} => ["devoured=true"]

            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string

    return arr.toString();
}


//object for all of the SQL statement functions..

var orm = {


    all: function (tableInput, cb) {

        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, result) {

            if (err) {

                throw err;
                
            }

            // returns tacos_db result in callback

            cb(result);

        });

    },


    // -- //


    create: function (table, cols, vals, cb) {

        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log("insert query: ", queryString);

        connection.query(queryString, vals, (err, result) => {

            if (err) {

                throw err;

            }

            cb(result);

        });

    },


    // -- //


    // example of objColVals would be {taco_name: chorizo, devoured: true}

    update: function (table, objColVals, condition, cb) {

        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log("UPDATE query: ", queryString);

        connection.query(queryString, (err, result) => {

            if (err) {

                throw err;

            }

            cb(result);

        });

    },


    // -- //


    remove: function (table, col, val, cb) {

        connection.query("DELETE FROM ?? WHERE ?? = ?",

            [table, col, val],

            (err, data) => {

                if (err)

                    throw err;

                return cb(data);

            });

    }

};


//export of the orm object for tacoModel.js

module.exports = orm;