<template>
<div id="app">
    <v-email @email_data='getEmail'></v-email>
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

<style>

</style>
