<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { IconName } from './Icons';

export default defineComponent({
    props: {
        name: {
            type: Object as PropType<IconName>,
            required: true
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
    data() {
        return {
            defaultSize: 20
        }
    },
    computed: {
        svgSize() {
            return this.size || this.defaultSize
        }
    }
})
</script>


<template>
    <svg :width="svgSize" :height="svgSize" :viewBox="`0 0 ${svgSize} ${svgSize}`" xmlns="http://www.w3.org/2000/svg"
        :class="className">
        <g :class="classNameG" :transform="`scale(${svgSize / defaultSize})`" :fill="color">
            <slot />
        </g>
    </svg>
</template>