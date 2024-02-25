class TourNotFoundCacheException extends Error {
    constructor (message) {
      super(message)
      this.name = 'TOUR_MATCHES_NOT_FOUND_IN_CACHE'
      this.message = message
    }
}
  
module.exports = {
    TourNotFoundCacheException
}