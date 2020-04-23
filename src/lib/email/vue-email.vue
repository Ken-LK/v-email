<template>
<div :class="dropdownWrapper">
    <input :class="dropdownInput" type="text" v-model="emailData" @input="changeEmail" :placeholder="holderText" autocomplete="off" />
    <div :class="dropdownList" @click="!showEmailPicker" v-if="showEmailPicker">
        <ul>
            <li v-for="(key,i) in emailSuffixList" @click="selectEmail(key)">{{key}}</li>
        </ul>
    </div>
</div>
</template>

<script>
import {
    matchedEmail
} from '../../../src/utils'
export default {
    name: "vEmail",
    props: {
        dropdownWrapper: {
            type: String,
            default: '_email-dropdown-wrapper'
        },
        dropdownInput: {
            type: String,
            default: '_email-dropdown-input'
        },
        dropdownList: {
            type: String,
            default: '_email-dropdown-list'
        },
        holderText:{
            type: String,
            default: ''
        },
        emailSuffixs: {
            type: Array,
            default: () => ['@qq.com', '@126.com', '@163.com', '@hotmail.com', '@sina.com', '@sohu.com', '@yahoo.com', '@139.com', '@189.cn', '@gmail.com']
        },
        initEmail: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            showEmailPicker: false,
            emailData: ''
        }
    },
    mounted() {
        this.emailData = this.initEmail;
    },
    computed: {
        emailSuffixList() {
            const emailAtOffset = this.emailData.indexOf('@');
            if (emailAtOffset > -1) {
                const _emailSuffix = this.emailData.substr(emailAtOffset);
                if (_emailSuffix) {
                    const _emailSuffixs = []
                    this.emailSuffixs.forEach(item => {
                        if (item.indexOf(_emailSuffix) > -1) {
                            _emailSuffixs.push(`${this.emailData.substr(0, emailAtOffset)}${item}`)
                        }
                    })
                    if (_emailSuffixs.length == 0) {
                        this.showEmailPicker = false
                    } else {
                        this.showEmailPicker = true
                    }
                    return _emailSuffixs
                } else {
                    return this.emailSuffixs.map(item => `${this.emailData.substr(0, emailAtOffset)}${item}`)
                }
            } else {
                return this.emailSuffixs.map(item => `${this.emailData}${item}`)
            }
        }

    },

    methods: {
        selectEmail(key) {
            //传值
            this.$emit('email_data', key);
            this.emailData = key;
            this.showEmailPicker = false
        },
        changeEmail(event) {
            let value = event.target.value;
            if (value.length > 1) {
                this.showEmailPicker = true
            } else {
                this.showEmailPicker = false
            }
        }
    }

}
</script>

<style lang="scss" scoped>
._email-dropdown-wrapper {
    position: relative;

    ._email-dropdown-input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
        color: #323233;
        line-height: inherit;
        text-align: right;
        background-color: transparent;
        border: 0;
        resize: none;
    }

    ._email-dropdown-list {
        width: 200px;
        text-align: right;
        position: absolute;
        font-size: 14px;
        z-index: 99;
        background-color: #fff;
        overflow-y: auto;
        border: 1px solid #eee;
        box-shadow: 0 4px 8px #ebedf0;
        max-height: 140px;
        transition: all 1s ease;
        right: 0;

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
