var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.connect = function (connectionString) {
        for (var property in connectionString) {
            console.log("".concat(property, " - [").concat(connectionString[property], "] "));
        }
    };
    return Database;
}());
var oracle = new Database();
oracle.connect({ Username: "root", Password: "root", DBName: "Oracle" });
console.log("------------------------");
var mysql = new Database();
mysql.connect({ user: "root", password: "root", host: "localhost:3306" });
console.log("-------------------------");
var mongoDb = new Database();
mongoDb.connect({ host: "localhost:27.0.0.1.27017" });
