import axios from "axios";

export default {
  getArticles: function () {
    return axios.get("/api/articles")
  },
  deleteArticle: function (id) {
    return axios.delete('/api/articles/' + id)
  },
  deleteAllArticles: function () {
    return axios.delete('/api/articles')
  },
  scrapeArticles: function() {
    return axios.get('/scrape')
  },
  saveArticle: function(id, savedArticle) {
    console.log("props",id, savedArticle)
    return axios.post('/saved/' + id, {body: savedArticle})
  }

}