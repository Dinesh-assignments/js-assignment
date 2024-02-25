const mysql = require('../lib/mysql');

const addNews = async news => {
    const statement = "insert into mydb.news (title, description, tourId, sportId, matchId) values (?, ? ,? , ? ,?)";
    const parameters = [news.title, news.description, news.tourId, news.sportId, news.matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async id => {
    const statement = 'select * from news where news.matchId = ?';
    const parameters = [id];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async id => {
    const statement = 'select * from news where news.tourId = ?';
    const parameters = [id];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async id => {
    const statement = 'select * from news';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

module.exports = {
    addNews: addNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}