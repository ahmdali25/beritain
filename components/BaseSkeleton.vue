<template>
    <div class="skeleton" :style="{ height: height, width: width }"></div>
</template>

<script>
export default {
    name: "BaseSkeleton",
    props: {
        width: {
            type: String,
            required: true,
        },
        height: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.skeleton {
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>