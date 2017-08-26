<template>
    <div>
        <v-layout row>
            <v-flex md3 lg2 class="hidden-sm-and-down">
                <v-list dense>
                    <template v-for="page in pages">
                        <v-list-tile :key="page" v-model="currentPages.main" @click="selectPage(page)">
                            <v-list-tile-content>
                                <v-list-tile-title>{{page}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-flex>
            <v-flex>
                <v-layout>
                    <v-flex class="pages-container">
                        <div class="page-nav-buttons">
                            <button class="page-nav-button previous text-xs-left" @click="prevPage()">
                                <v-icon>mdi-arrow-left</v-icon>
                            </button>
                            <button class="page-nav-button next text-xs-right" @click="nextPage()">
                                <v-icon>mdi-arrow-right</v-icon>
                            </button>
                        </div>
                        <div class="page-container main">
                            <div class="page-heading">
                                <h6 class="page-title text-xs-right">{{currentPages.main}}</h6>
                            </div>
                            <div class="page-content">
                                <img class="page-image elevation-8" :src="`/assets/images/comic/${currentPages.main}`" :alt="currentPages.main">
                            </div>
                        </div>
                        <div class="page-container">
                            <div class="page-heading">
                                <h6 class="page-title text-xs-right">{{currentPages.next}}</h6>
                            </div>
                            <div class="page-content">
                                <img class="page-image elevation-8" :src="`/assets/images/comic/${currentPages.next}`" :alt="currentPages.next">
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts" src="./Reader.ts"></script>
<style lang="stylus" src="./Reader.styl"></style>