<template>
<div id="app">
    <v-email dropdownWrapper='email-dropdown-wrapper' dropdownInput='email-dropdown-input' dropdownList='email-dropdown-list'
     holderText='我是初始展示' @email_data='getEmail' initEmail='test@qq.com'></v-email>
</div>
</template>

<script>
export default {
    name: 'app',
    components: {},
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        getEmail(val) {
            console.log('input_Email', val)
        }
    }
}
</script>

<style lang="scss">
.email-dropdown-wrapper {

    .email-dropdown-input {
        margin: 0 auto;
        font-size: 20px;
        height: 45px;
        border: solid 1px #eee;
    }

    .email-dropdown-list {
        width: 200px;
        text-align: left;;
        position: absolute;
        font-size: 14px;
        z-index: 99;
        background-color: #fff;
        overflow-y: auto;
        border: 1px solid #eee;
        box-shadow: 0 4px 8px #ebedf0;
        max-height: 140px;
        transition: all 1s ease;

        li {
            color: #666;
            padding: 5px 5px;
            border-bottom: dotted 1px #eee;
            list-style: none;
        }
    }

    &:after {
        position: absolute;
        box-sizing: border-box;
        pointer-events: none;
        right: 0;
        bottom: 0;
        left: 0.42667rem;
        border-bottom: 0.02667rem solid #ebedf0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
}
</style>
