interface IOracle {
    Username:string;
    Password:string;
    DBName:string;
}

interface MySQL 
{
    user:string;
    password:string;
    host:string;
}

interface MongoDB
{
    host:string;
}

class Database
{
    public connect<T>(connectionString:T){
        for(var property in connectionString){
            console.log(`${property} - [${connectionString[property]}] `)
        }
    }
}

let oracle = new Database();
oracle.connect<IOracle>({Username:"root" , Password:"root" , DBName:"Oracle"})
console.log("------------------------")
let mysql = new Database();
mysql.connect<MySQL>({user:"root",password:"root",host:"localhost:3306"});
console.log("-------------------------")
let mongoDb = new Database();
mongoDb.connect<MongoDB>({host:"localhost:27.0.0.1.27017"});

