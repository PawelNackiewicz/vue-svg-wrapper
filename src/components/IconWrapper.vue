<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // type inference enabled
    props: {
        name: String,
        size: Number,
        color: String,
        className: String,
        classNameG: String
    },
    data() {
        return {
            defaultSize: 20
        }
    }
})
</script>


<template>
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" xmlns="http://www.w3.org/2000/svg"
        :class="className">
        <g :class="classNameG" :transform="`scale(${size / defaultSize})`" :fill="color">
            {props.children}
        </g>
    </svg>
</template>