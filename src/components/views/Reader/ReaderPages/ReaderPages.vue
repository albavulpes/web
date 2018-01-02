<script lang="ts" src="./ReaderPages.ts"></script>
<style lang="scss" src="./ReaderPages.scss"></style>

<template>
    <div class="ReaderPagesComponent">
        <div class="pages-container">
            <div class="row h-100 justify-content-center pages-container-row">
                <!-- Previous Page -->
                <div class="col-4 h-100 page-container d-none d-md-block previous">
                    <div class="row h-100 align-items-center justify-content-center page-content" v-if="!!previousPage">
                        <img class="page-image" :src="`http://via.placeholder.com/1200x1600?text=Page+${previousPage.Number}`" alt="Previous Page">
                    </div>
                </div>

                <!-- Current Page -->
                <div class="col-lg-6 h-100 page-container current">
                    <div class="row h-100 align-items-center justify-content-center page-content">
                        <img class="page-image" :src="`http://via.placeholder.com/1200x1600?text=Page+${currentPage.Number}`" alt="Current Page">
                    </div>
                </div>

                <!-- Next Page -->
                <div class="col-4 h-100 page-container d-none d-md-block next">
                    <div class="row h-100 align-items-center justify-content-center page-content" v-if="!!nextPage">
                        <img class="page-image" :src="`http://via.placeholder.com/1200x1600?text=Page+${nextPage.Number}`" alt="Next Page">
                    </div>
                </div>
            </div>
        </div>

        <div class="page-nav-buttons">
            <div class="row h-100">
                <div class="col-6 col-lg-3">
                    <button class="page-nav-button btn-block text-left text-white previous" v-if="!!previousPage" @click="goToPreviousPage()">
                        <i class="fa fa-fw fa-3x fa-chevron-left"></i>
                    </button>
                </div>
                <div class="col-6 col-lg-3 ml-auto">
                    <button class="page-nav-button btn-block text-right text-white next" v-if="!!nextPage" @click="goToNextPage()">
                        <i class="fa fa-fw fa-3x fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
