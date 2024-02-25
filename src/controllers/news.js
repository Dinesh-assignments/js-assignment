const { NewsException } = require('../exceptions/newsExceptions');
const Match = require('../models/match');
const Tour = require('../models/tour');
const News = require('../models/news');

const isValidNews = (news) => {
    if(news?.title && news?.description){
        if(news?.matchId){
            return true;
        }
        else if(news?.tourId){
            return true;
        }
        else if(news?.sportId){
            return true;
        }
    }
    return false;

}
const addNews = async (news) => {
    if(isValidNews(news)){
        if(news.matchId){
            const Ids = await Match.getTourAndSportIdByMatchId(news.matchId);
            if(Ids.length==0){
                throw new NewsException("Invalid Match Id")
            }
            news.tourId = Ids[0].tourId;
            news.sportId = Ids[0].sportId;
        }
        else if(news.tourId){
            const Ids = await Tour.getSportIdByTourId(news.tourId);
            if(Ids.length==0){
                throw new NewsException("Invalid Tour Id")
            }
            news.matchId = null;
            news.sportId = Ids[0].sportId;
        }
        else{
            news.matchId = null;
            news.tourId = null;
        }
        return await News.addNews(news);
    }
    throw new NewsException("invalid news");
}

const getNewsByTourId = async params => {
    const { id } = params;

    if (!id) {
        throw new NewsException('Missing required parameter: id');
    }
    return await News.getNewsByTourId(id);
}

const getNewsBySportId = async params => {
    const { id } = params;

    if (!id) {
        throw new NewsException('Missing required parameter: id');
    }
    return await News.getNewsBySportId(id);
}

const getNewsByMatchId = async params => {
    const { id } = params;

    if (!id) {
        throw new NewsException('Missing required parameter: id');
    }
    return await News.getNewsByMatchId(id);
}


module.exports = {
    addNews: addNews,
    getNewsByTourId: getNewsByTourId,
    getNewsByMatchId: getNewsByMatchId,
    getNewsBySportId: getNewsBySportId
}