<template>
    <div class="m-header">
        <router-link to="/user" class="mine" tag="div">
            <i class="icon-list iconfont"></i>
        </router-link>
        <h1 class="text">HUO</h1>
        <router-link to="/search" class="search" tag="div">
            <i class="iconfont icon-search"></i>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "m-header"
    }
</script>

<style scoped lang="scss">
@import "~@/common/scss/variable.scss";
    .m-header{
        position: relative;
        height: 44px;
        width: 100%;
        text-align: center;
        background: $color-theme;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .mine{
            .iconfont {
                display: block;
                padding: 11px;
                font-size: 22px;
                color: $color-theme-l;
            }
        }
        .text {
            font-weight: bold;
            color: $color-text-l;
            letter-spacing: 3px;
        }
        .search {
            .iconfont {
                display: block;
                padding: 12px;
                font-size: 18px;
                color: $color-theme-l;
            }
        }

    }
</style>
