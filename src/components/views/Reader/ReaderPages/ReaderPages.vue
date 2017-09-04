<template>
    <v-layout class="pages-container">
        <div class="page-nav-buttons">
            <button class="page-nav-button previous text-xs-left" v-if="!!previousPage" @click="prevPage()">
                <i class="fa fa-fw fa-2x fa-chevron-left"></i>
            </button>
            <button class="page-nav-button next text-xs-right" v-if="!!nextPage" @click="nextPage()">
                <i class="fa fa-fw fa-2x fa-chevron-right"></i>
            </button>
        </div>
        <v-flex lg6 class="text-xs-center text-lg-left">
            <div class="page-container main">
                <div class="page-heading">
                    <h6 class="page-title text-xs-center text-lg-right">Page currentPage.Number</h6>
                </div>
                <div class="page-content">
                    <img class="page-image elevation-8" src="currentPage.Image.Main" alt="currentPage">
                </div>
            </div>
        </v-flex>
        <v-flex lg6 class="hidden-md-and-down">
            <div class="page-container" v-if="!!nextPage">
                <div class="page-heading">
                    <h6 class="page-title text-xs-right">Page {{nextPage.Number}}</h6>
                </div>
                <div class="page-content">
                    <img class="page-image elevation-8" src="nextPage.Image.Main" :alt="nextPage.Description">
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script lang="ts" src="./ReaderPages.ts"></script>
<style lang="stylus" src="./ReaderPages.styl" scoped></style>