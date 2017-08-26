<template>
    <div>
        <v-layout>
            <v-flex md3 lg2 fill-height class="hidden-sm-and-down">
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
            <v-flex xs12 md9 lg10>
                <v-layout class="pages-container">
                    <div class="page-nav-buttons">
                        <button class="page-nav-button previous text-xs-left" v-if="!!currentPages.prev" @click="prevPage()">
                            <i class="fa fa-fw fa-2x fa-chevron-left"></i>
                        </button>
                        <button class="page-nav-button next text-xs-right" v-if="!!currentPages.next" @click="nextPage()">
                            <i class="fa fa-fw fa-2x fa-chevron-right"></i>
                        </button>
                    </div>
                    <v-flex lg6 class="text-xs-center text-lg-left">
                        <div class="page-container main">
                            <div class="page-heading">
                                <h6 class="page-title text-xs-right">{{currentPages.main}}</h6>
                            </div>
                            <div class="page-content">
                                <img class="page-image elevation-8" :src="`/assets/images/comic/${currentPages.main}`" :alt="currentPages.main">
                            </div>
                        </div>
                    </v-flex>
                    <v-flex lg6 class="hidden-md-and-down">
                        <div class="page-container" v-if="!!currentPages.next">
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