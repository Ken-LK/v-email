import vEmail from './vue-email'

export function install (Vue) {
	Vue.component('v-email', vEmail)
}

export {
	vEmail,
}

const myPlugin = {
	install,
}

export default myPlugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(myPlugin)
}
