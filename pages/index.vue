<template>
  <section>
    <div v-if="isLoading" class="main">
      <article class="article">
        <div class="skeleton-article">
          <div class="skeleton-article__title">
            <BaseSkeleton height="1.5rem" width="95%"/>
          </div>
          <div class="skeleton-article__desc">
            <BaseSkeleton height="2rem" width="100%" />
          </div>
        </div>
        <div class="skeleton-article__image">
          <BaseSkeleton height="250px" width="60%"/>
        </div>
      </article>
      <aside class="side">
        <ul class="skeleton-list">
          <div class="skeleton-list__title">
            <BaseSkeleton height="1.8rem" width="70%"/>
          </div>
          <li v-for="(n, index) in 5" :key="index" class="skeleton-list__list">
            <BaseSkeleton height="3rem" width="90%"/>
          </li>
        </ul>
      </aside>
    </div>
    <div v-else class="main">
      <article class="article">
        <div class="article-text">
          <h1 class="article-text__title"> {{ getNews[0].title }}</h1>
          <p class="article-text__desc">{{ getNews[0].contentSnippet }}</p>
        </div>
        <div>
          <nuxt-img
            class="article-image"
            :src="getNews[0].image.large"
            width="500"
            loading="lazy"
          />
        </div>
      </article>
      <aside class="sidebar">
        <h2 class="sidebar__title">Terpopuler</h2>
        <hr class="sidebar__underline">
        <ul class="sidebar__populer-list">
          <li v-for="(news, index) in getNews.slice(0,10)" :key="news.id" class="list">
            <span class="index">{{ index + 1 }}</span>
            <h2 class="title">{{ news.title }}</h2>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseSkeleton from '../components/BaseSkeleton.vue';

export default {
  name: 'IndexPage',
  components: { BaseSkeleton },
  computed: {
    ...mapGetters(['getNews', 'isLoading']),
  },
  mounted() {
    this.getNewsData();
  },
  methods: {
    ...mapActions(['getNewsData']),
  }
}
</script>

<style lang="scss">
.main {
  display: flex;
  padding-top: 20px;
}

.article {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 80%;
  border: 1px solid #E3E8EB;

  .article-text {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 25px;
      cursor: pointer;
    }

    &__desc {
      margin-top: -4px;
      font-size: 15px;
    }
  }

  .article-image {
    cursor: pointer;
  }
}

.sidebar {
  flex: 30%;

  &__title {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }

  &__underline {
    margin-top: -20px;
    background-color: #CC0000;
    width: 15%;
    height: 2px;
  }

  &__populer-list {
    list-style: none;
    counter-increment: list-pop;
    height: 370px;
    overflow-y: auto;
    position: relative;

    .index {
      font-size: 20px;
      color: #CC0000;
      font-weight: 500;
    }

    .list {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      cursor: pointer;
    }

    .title {
      font-size: 16px;
    }
  }
}

// Skeleton

.skeleton-article {
  &__title {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &__desc {
    margin-bottom: 20px;
  }
}

.skeleton-list {
  list-style: none;

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }
}
</style>
