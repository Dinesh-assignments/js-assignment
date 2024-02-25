// As of now, I have implemented a local cache to optimize query time. We can use Redis cache in production, which would be even better

const { TourNotFoundCacheException } = require("../exceptions/tourNotFoundCacheException");

const tourMatches = {};

function addMatchesByTourName(name, matches){
    tourMatches[name] = matches
}

function removeMatchesByTourName(name){
    delete tourMatches[name]
}

function getMatchesByTourName(name){
    if(name in tourMatches){
        return tourMatches[name]
    }
    throw new TourNotFoundCacheException("Tour Not Found in Cache");
}

module.exports = {
    getMatchesByTourName: getMatchesByTourName,
    addMatchesByTourName: addMatchesByTourName,
    removeMatchesByTourName: removeMatchesByTourName
};