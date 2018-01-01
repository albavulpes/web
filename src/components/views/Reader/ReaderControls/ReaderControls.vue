<script lang="ts" src="./ReaderControls.ts"></script>
<!--<style lang="stylus" src="./ReaderControls.styl"></style>-->

<template>
    <v-bottom-nav absolute value="true" class="reader-controls">
        <v-layout class="reader-controls-layout">
            <v-flex class="text-xs-left">
                <v-btn flat>
                    <v-icon>mdi-view-list</v-icon>
                </v-btn>
            </v-flex>
            <v-flex md8 lg6 class="text-xs-center">
                <v-layout justify-center>
                    <v-btn flat class="hidden-xs-only">
                        <v-icon>mdi-page-first</v-icon>
                    </v-btn>
                    <v-btn flat class="hidden-sm-and-down" @click="prevPage()">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>

                    <v-flex md5 class="text-xs-center">
                        <v-btn block flat>
                            <span class="subheading">{{currentPage}}</span>
                            <span>Chapter 2</span>
                        </v-btn>
                    </v-flex>

                    <v-btn flat class="hidden-sm-and-down" @click="nextPage()">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn flat class="hidden-xs-only">
                        <v-icon>mdi-page-last</v-icon>
                    </v-btn>
                </v-layout>
            </v-flex>
            <v-flex class="text-xs-right">
                <v-btn flat>
                    <v-icon>mdi-fullscreen</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-bottom-nav>
</template>
