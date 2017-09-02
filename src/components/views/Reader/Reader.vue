<template>
    <v-layout>
        <v-flex>
            <ReaderGuide class="reader-guide"
                :pages="pages"
                :currentPage="currentPages.main"
            ></ReaderGuide>

            <ReaderPages class="reader-pages"
                :previousPage="currentPages.prev"
                :currentPage="currentPages.main"
                :nextPage="currentPages.next"
            ></ReaderPages>
        </v-flex>
    </v-layout>
</template>

<script lang="ts" src="./Reader.ts"></script>
<style lang="stylus" src="./Reader.styl" scoped></style>