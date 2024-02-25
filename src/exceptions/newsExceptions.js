class NewsException extends Error {
    constructor (message) {
      super(message)
      this.name = 'NEWS_ERROR'
      this.message = message
    }
}
  
module.exports = {
    NewsException: NewsException
}