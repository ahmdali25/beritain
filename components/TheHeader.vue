<template>
    <nav class="navbar">
        <h1 class="navbar__brand">Berita<span>in</span></h1>
        <ul class="navbar__list">
            <li v-for="list in lists" :key="list.id">{{ list.name }}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "TheHeader",
    data: () => ({
        lists: [
            { id: 1, name: "Home" },
            { id: 2, name: "Nasional" },
            { id: 3, name: "Internasional" },
            { id: 4, name: "Ekonomi" },
            { id: 5, name: "Olahraga" },
            { id: 6, name: "Teknologi" },
            { id: 7, name: "Hiburan" },
            { id: 8, name: "Gaya Hidup" },
        ]
    })
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__brand {
        span {
            color: #CC0000;
        }
    }

    &__list {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 10px;

        li {
            cursor: pointer;
        }
    }
}
</style>