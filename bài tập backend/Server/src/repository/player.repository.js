const db=require("../config/db.config")
async function getAllPlayerMySQL() {
    try {
        const [result]= await db.execute("select * from player")
        return result;
    } catch (error) {
        console.log(error);
    } 
}
async function addPlayerMySql(namePlayer) {
    try {
        const [result] = await db.execute("insert into player (namePlayer) values (?)",[namePlayer])
        return result
    } catch (error) {
        console.log(error);
    }
}
async function incrementPoint(id) {
    try {
        const [result]= await db.execute("update player set point = point + 1 where id = ?",[id]);
        return result.insertId
    } catch (error) {
        console.log(error);
    }
}
async function decrementPoint(id) {
    try {
        const [result]= await db.execute("update player set point = point - 1 where id = ?",[id]);
        return result.insertId
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllPlayerMySQL,
    addPlayerMySql,
    incrementPoint,
    decrementPoint
}