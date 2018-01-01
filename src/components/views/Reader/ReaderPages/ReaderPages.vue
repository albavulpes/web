<script lang="ts" src="./ReaderPages.ts"></script>
<style lang="scss" src="./ReaderPages.scss"></style>

<template>
    <div class="ReaderPagesComponent">
        <div class="row justify-content-center pages-container">
            <div class="col-6 page-container main">
                <div class="row flex-column">
                    <div class="col-auto align-self-end page-title">
                        <div class="h6 text-xs-center text-lg-right">
                            Page {{currentPage.Number}}
                        </div>
                    </div>
                    <div class="col text-center page-content">
                        <img class="page-image" :src="`http://via.placeholder.com/1200x1600?text=Page+${currentPage.Number}`" alt="Current Page">
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
        <div class="page-nav-buttons">
            <div class="row">
                <div class="col col-lg-3">
                    <button class="page-nav-button btn-block text-left text-white" v-if="!!previousPage" @click="goToPreviousPage()">
                        <i class="fa fa-fw fa-3x fa-chevron-left"></i>
                    </button>
                </div>
                <div class="col col-lg-3 ml-auto">
                    <button class="page-nav-button btn-block text-right text-white" v-if="!!nextPage" @click="goToNextPage()">
                        <i class="fa fa-fw fa-3x fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
