<template>
    <section class="main">
        <article class="article">
            <div class="article-text">
                <h1 class="article-text__title"> {{ getDetailNews.title }}</h1>
                <p class="article-text__desc">{{ getDetailNews.contentSnippet }}</p>
            </div>
            <div>
                <nuxt-img
                    class="article-image"
                    :src="getDetailNews.image.large"
                    width="500"
                    loading="lazy"
                />
            </div>
            <div class="article-button">
                <button class="button">Edit Artikel</button>
            </div>
      </article>
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "DetailNews",
    computed: {
        ...mapGetters(['getDetailNews']),
    }
}
</script>

<style lang="scss" scoped>
.main {
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
}

.article-button {
    margin-top: 10px;

    .button {
        background: #8bac3e;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        padding: 10px 18px;
        height: 42px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
    }
}
</style>