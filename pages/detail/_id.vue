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
                <button class="button" @click="handleEditArtikel">Edit Artikel</button>
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
    },
    methods: {
        handleEditArtikel() {
            // const editNews = {
            //     "type": "doc",
            //     "content": [
            //         {
            //             "type": "heading",
            //             "attrs": {
            //                 "level": 1,
            //             },
            //             "content": [
            //                 {
            //                     "type": "text",
            //                     "text": this.getDetailNews.title,
            //                 }
            //             ]
            //         },
            //         {
            //             "type": "paragraph",
            //             "content": [
            //                 {
            //                     "type": "text",
            //                     "text": this.getDetailNews.contentSnippet,
            //                 }
            //             ]
            //         },
            //         {
            //             "type": "image",
            //             "content": [
            //                 {
            //                     "type": "image",
            //                     "path": this.getDetailNews.image.large
            //                 }
            //             ]
            //         }
            //     ]
            // }
            const editNews = {
                id: this.getDetailNews.id,
                content: `<h1>${this.getDetailNews.title}</h1><br><p>${this.getDetailNews.contentSnippet}</p><br><img src=${this.getDetailNews.image.large} />`,
            }
            this.$store.commit("setEditNews", editNews);
        }
    },
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