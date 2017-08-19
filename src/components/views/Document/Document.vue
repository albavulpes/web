<template>
    <div class="DocumentViewComponent">
        <div v-if="documentHtml" v-html="documentHtml"></div>
    </div>
</template>

<script lang="ts" src="./Document.ts"></script>