<template>
    <v-bottom-nav absolute value="true" class="reader-controls">
        <v-layout class="reader-controls-layout">
            <v-flex class="text-xs-left">
                <v-btn flat light>
                    <v-icon>mdi-view-list</v-icon>
                </v-btn>
            </v-flex>
            <v-flex md8 class="text-xs-center">
                <v-btn flat light class="hidden-xs-only">
                    <v-icon>mdi-page-first</v-icon>
                </v-btn>
                <v-btn flat light class="hidden-xs-only" @click="prevPage()">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>

                <v-btn flat light>
                    <span class="subheading">{{currentPage}}</span>
                    <span>Chapter 2</span>
                </v-btn>

                <v-btn flat light class="hidden-xs-only" @click="nextPage()">
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                <v-btn flat light class="hidden-xs-only">
                    <v-icon>mdi-page-last</v-icon>
                </v-btn>
            </v-flex>
            <v-flex class="text-xs-right">
                <v-btn flat light>
                    <v-icon>mdi-fullscreen</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>


    </v-bottom-nav>
</template>

<script lang="ts" src="./ReaderControls.ts"></script>
<style lang="stylus" src="./ReaderControls.styl" scoped></style>