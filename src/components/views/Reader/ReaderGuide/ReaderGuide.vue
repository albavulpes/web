<template>
    <v-list dense class="reader-guide">
        <template v-for="page in pages">
            <v-list-tile :key="page.Id" v-model="currentPage.Id" @click="selectPage(page)">
                <v-list-tile-content>
                    <v-list-tile-title>Page {{page.Number}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script lang="ts" src="./ReaderGuide.ts"></script>
<style lang="stylus" src="./ReaderGuide.styl" scoped></style>