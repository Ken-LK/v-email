<template>
<div :class="className">
    <!-- <van-field label="电子邮箱" v-model="emailData" placeholder="用于接收电子保单邮箱" @input="changeEmail" autocomplete="new-email" clearable v-if="true"></van-field> -->
    <input type="text" v-model="emailData" placeholder="用于接收电子保单邮箱" autocomplete="off" />
    <div :class="childClassName" @click="!showEmailPicker" v-if="showEmailPicker">
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
        className: {
            type: String,
            default: 'email-dropdown-wrapper'
        },
        childClassName: {
            type: String,
            default: 'email-dropdown-list'
        },
        emailSuffixs: {
            type: Array,
            default: () => ['@qq.com', '@126.com', '@163.com', '@hotmail.com', '@sina.com', '@sohu.com', '@yahoo.com', '@139.com', '@189.cn', '@gmail.com']
        },
        initEmail:{
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
    mounted(){
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
    watch: {
        emailData: {
            handler(value) {
                if (value.length > 1) {
                    if (matchedEmail(value)) {
                        this.showEmailPicker = false
                    } else {
                        this.showEmailPicker = true
                    }

                } else {
                    this.showEmailPicker = false
                }
            }

        }
    },
    methods: {
        selectEmail(key) {
            //传值
            this.$emit('email_data', key);
            this.emailData = key;
            this.showEmailPicker = false
        }
    }

}
</script>

<style lang="scss" scoped>
.email-dropdown-wrapper {
    position: relative;

    .email-dropdown-list {
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
        content: ' ';
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
