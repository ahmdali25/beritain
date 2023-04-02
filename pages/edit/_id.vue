<template>
    <section class="main">
        <Editor v-model="content" />
        <!-- <div class="content">
            <h3>Content</h3>
            <pre><code>{{ content }}</code></pre>
        </div> -->
        <button class="button" @click="backToDetail">Kembali</button>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import Editor from '../../components/Editor.vue'

export default {
    name: "DetailNews",
    components: { Editor },
    data: () => ({
        content: "",
    }),
    computed: {
        ...mapGetters(['getEditNews']),
    },
    mounted() {
        this.content = this.getEditNews;
    },
    methods: {
        handleEditArtikel() {
            this.$store.commit("setEditNews", this.getEditNews);
        },
        backToDetail() {
            this.$router.go(-1);
        }
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
</style>