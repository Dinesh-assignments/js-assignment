const { TourNotFoundCacheException } = require('../exceptions/tourNotFoundCacheException');
const Tour = require('../models/tour');
const Cache = require('./cache')

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }
    try{
        return Cache.getMatchesByTourName(name);
    }catch(err){
        if(err instanceof TourNotFoundCacheException){
            const matches =  await Tour.getMatchesByTourName(params);
            Cache.addMatchesByTourName(name, matches);
            return matches
        }
        return new Error('Server Error, Please Retry After Some Time')
    }
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}