const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getTourAndSportIdByMatchId = async id => {
    const statement = 'select matches.tourId as tourId, tours.sportId as sportId from matches inner join tours on matches.tourId = tours.id where matches.id = ?';
    const parameters = [id];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllMatches: getAllMatches,
    getTourAndSportIdByMatchId: getTourAndSportIdByMatchId
}