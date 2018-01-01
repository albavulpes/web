<script lang="ts" src="./ReaderPages.ts"></script>
<style lang="scss" src="./ReaderPages.scss"></style>

<template>
    <div class="ReaderPagesComponent container-fluid">
        <div class="row pages-container">
            <div class="page-nav-buttons">
                <button class="page-nav-button previous text-xs-left" v-if="!!previousPage" @click="goToPreviousPage()">
                    <i class="fa fa-fw fa-2x fa-chevron-left"></i>
                </button>
                <button class="page-nav-button next text-xs-right" v-if="!!nextPage" @click="goToNextPage()">
                    <i class="fa fa-fw fa-2x fa-chevron-right"></i>
                </button>
            </div>
            <div class="col-lg-8">
                <div class="page-container main">
                    <div class="page-heading">
                        <h6 class="page-title text-xs-center text-lg-right">Page {{currentPage.Number}}</h6>
                    </div>
                    <div class="page-content">
                        <img class="page-image elevation-8" :src="`http://via.placeholder.com/1200x1600?text=Page+${currentPage.Number}`" alt="Current Page">
                    </div>
                </div>
            </div>
            <!--<div class="col-lg-6 d-none d-md-block">
                <div class="page-container" v-if="!!nextPage">
                    <div class="page-heading">
                        <h6 class="page-title text-xs-right">Page {{nextPage.Number}}</h6>
                    </div>
                    <div class="page-content">
                        <img class="page-image elevation-8" src="nextPage.Image.Main" :alt="nextPage.Description">
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</template>
