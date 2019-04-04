<script lang="ts" src="./MediaCard.ts"></script>
<style lang="scss" src="./MediaCard.scss"></style>

<template>
    <div class="MediaCardComponent">
        <div class="shadow-4">
            <slot name="image"></slot>
        </div>
        <div class="mt-2 px-1">
            <h3 class="h5 media-title text-white font-weight-light m-0">
                <slot name="title"></slot>
            </h3>
            <p class="text-info">
                <slot name="subheading"></slot>
            </p>
        </div>
    </div>
</template>