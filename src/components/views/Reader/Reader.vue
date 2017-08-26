<template>
    <div>
        <v-layout row>
            <v-flex md3 lg2 class="hidden-sm-and-down">
                <v-list dense>
                    <template v-for="page in pages">
                        <v-list-tile :key="page" v-model="currentPage" @click="selectPage(page)">
                            <v-list-tile-content>
                                <v-list-tile-title>{{page}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-flex>
            <v-flex>
                <v-layout row>
                    <v-flex>
                        <div class="pages-container">
                            <button class="page-nav-button previous text-xs-left" @click="prevPage()">
                                <v-icon>mdi-arrow-left</v-icon>
                            </button>
                            <button class="page-nav-button next text-xs-right" @click="nextPage()">
                                <v-icon>mdi-arrow-right</v-icon>
                            </button>
                            <div class="page-container">
                                <div class="page-heading">
                                    <h5 class="page-title">{{currentPage}}</h5>
                                </div>
                                <div class="page-content">
                                    <img class="page-image elevation-8" :src="`/assets/images/comic/${currentPage}`" :alt="currentPage">
                                </div>
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