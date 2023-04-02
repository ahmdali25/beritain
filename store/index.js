export const state = () => ({
    news: [],
    loading: true,
    detailNews: {},
  })
  
  export const getters = {
    getNews(state) {
      return state.news;
    },
    getDetailNews(state) {
      return state.detailNews;
    },
    isLoading(state) {
      return state.loading;
    }
  }
  
  export const mutations = {
    setNewsData(state, payload) {
      state.news = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setDetailNews(state, payload) {
      state.detailNews = payload;
      this.$router.push({ name: "detail-id", params: { id: payload.id } } )
    }
  }
  
  export const actions = {
    async getNewsData ({commit}) {
      try {
        const response = await this.$axios.$get('https://berita-indo-api.vercel.app/v1/cnn-news');
        const data = response.data.map((item, index) => ({ ...item, id: index + 1 }))
        commit("setNewsData", data);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
  }