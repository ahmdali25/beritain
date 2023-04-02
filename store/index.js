export const state = () => ({
    news: [],
    loading: true,
  })
  
  export const getters = {
    getNews(state) {
      return state.news;
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
    }
  }
  
  export const actions = {
    async getNewsData ({commit}) {
      try {
        const data = await this.$axios.$get('https://berita-indo-api.vercel.app/v1/cnn-news');
        commit("setNewsData", data.data);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
  }