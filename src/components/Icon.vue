<script lang="ts">
import { defineComponent } from 'vue'
import { defaultIcons } from './Icons';
import IconWrapper from './IconWrapper.vue';
import type { PropType } from 'vue'

export type IconName = keyof typeof defaultIcons

export default defineComponent({
    props: {
        name: {
            type: Object as PropType<IconName>,
            required: true
        },
        classNamePath: {
            type: String,
            required: false
        },
        size: {
            type: Number,
            required: false
        },
        color: {
            type: String,
            required: false
        },
        className: {
            type: String,
            required: false
        },
        classNameG: {
            type: String,
            required: false
        }
    },
    components: {
        IconWrapper
    },
    computed: {
        iconPath() {
            return defaultIcons[this.name]
        }
    }
})
</script>


<template>
    <span v-if="!iconPath" role='img' aria-label="Missing icon">🙄</span>

    <IconWrapper v-else :dimensions="20" v-bind="$props">
        <path :d="iconPath" fillRule="evenodd" clipRule="evenodd" :class="classNamePath" />
    </IconWrapper>
</template>