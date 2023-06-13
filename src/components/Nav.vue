<template>
    <div class="vis-nav" :style="styles">
        <div class="vis-brand-title">Lambda分析</div>

        <div class="vis-menu">
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                @select="handleSelect"
                text-color="#fff"
                router
            >
                <el-menu-item
                    v-for="item in menu"
                    :index="item.comName"
                    :key="item.comName"
                    :style="nowIndex === item.path ? activeStyle : defaultStyle"
                >
                    <span v-text="item.name"></span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import menu from '@/config/menu'

    // /
    // <link rel="stylesheet" href="./augmented-ui-main/aug-core.min.css">
    // <link rel="stylesheet" href="./augmented-ui-main/augmented-ui.css">
    // <link rel="stylesheet" href="./augmented-ui-main/border-inlay-mixins.min.css">
    // <link rel="stylesheet" href="./augmented-ui-main/region-mixins.min.css">
    // <link rel="stylesheet" href="./augmented-ui-main/shape-mixins.min.css">
    // import picture from '@/assets/top-bg.png'
    // import picture2 from '@/assets/nav-bg.png'

    export default {
        name: 'Nav',
        data() {
            return {
                activeIndex: 'pc',
                nowIndex: window.location.hash.replace('#/', '').toLowerCase(),
                menu: menu,
                date: '',
                styles: {
                    background: `#000`,
                    backgroundSize: '100% 78%',
                    backgroundPosition: '0px 10px',
                },
                activeStyle: {
                    color: '#fff !important',
                    backgroundSize: '100% 78%',
                    backgroundPosition: '0px 6px',

                },
                defaultStyle: {
                    color: '#fff !important',
                    background: 'none !important',
                }
            };
        },
        methods: {
            handleSelect(key) {
                this.nowIndex = key.toLowerCase();
            }
        }
    };
</script>

<style lang="less" scoped>
    @green: #a962ff;
    @borderWidth: 2px;
    .vis-nav{
        display: flex;
        justify-content: center;
        color: #4f94bf;
        .vis-menu{
            font-size: 14px;
            width: 40%;
            position: relative;
            display: flex;
             .el-menu{
                padding: 0 20px;
                background: rgba(0, 0, 0, 0);
                flex: 1;
                border: none;
                display: flex !important;
                justify-content: space-around;
                .el-menu-item{
                    display: block;
                    border: none !important;
                    color: #4f94bf !important;
                    flex: 1;
                    text-align: center;
                    &:hover,&:focus{
                        color: red;
                        background: red;
                    }
                    &.is-active{
                        color: #fff !important;
                    }
                }
            }
        }
        .vis-brand-title{
              font-family: "Lato","Verdana",sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-weight: 400;
              margin: 0;
              padding: 0;
                      float: left;
              color: #fff;
              font-size: 50px;
              line-height: 50px;
              transition: 0.7s all;
        }
    }
</style>