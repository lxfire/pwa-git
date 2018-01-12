import Vue from 'vue'

Vue.component('ItemDemo', {
    functional: true,
    props: {
        items: {
            type: Array,
            required: true
        },
        isVisiable: Boolean
    }
    render: (h) => {
        h.createElement()
    }
})