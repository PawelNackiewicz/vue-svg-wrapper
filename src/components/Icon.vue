<script lang="ts">
import { defineComponent } from 'vue'
import { defaultIcons } from './Icons';
import IconWrapper from './IconWrapper.vue';

defineProps<{
    name: IconName
    classNamePath?: number
}>()

type IconName = keyof typeof defaultIcons

export default defineComponent({
    components: {
        IconWrapper
    }
})
</script>


<template>
    <IconWrapper {...wrapperProps}>
        <path :d="defaultIcons[name]" fillRule="evenodd" clipRule="evenodd" className={classNamePath} />
    </IconWrapper>
</template>