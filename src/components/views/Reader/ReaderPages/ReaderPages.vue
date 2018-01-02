<script lang="ts" src="./ReaderPages.ts"></script>
<style lang="scss" src="./ReaderPages.scss"></style>

<template>
    <div class="ReaderPagesComponent">
        <div class="pages-container">
            <div class="row justify-content-center pages-container-row">
                <!-- Previous Page -->
                <div class="col-4 page-container d-none d-md-block previous">
                    <div class="row flex-column" v-if="!!previousPage">
                        <div class="col text-center page-content">
                            <img class="page-image" :src="`http://via.placeholder.com/1200x1600?text=Page+${previousPage.Number}`" alt="Previous Page">
                        </div>
                    </div>
                </div>

                <!-- Current Page -->
                <div class="col-6 page-container current">
                    <div class="row flex-column">
                        <div class="col text-center page-content">
                            <img class="page-image" :src="`http://via.placeholder.com/1200x1600?text=Page+${currentPage.Number}`" alt="Current Page">
                        </div>
                    </div>
                </div>

                <!-- Next Page -->
                <div class="col-4 page-container d-none d-md-block next">
                    <div class="row flex-column" v-if="!!nextPage">
                        <div class="col text-center page-content">
                            <img class="page-image" :src="`http://via.placeholder.com/1200x1600?text=Page+${nextPage.Number}`" alt="Next Page">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="page-nav-buttons">
            <div class="row">
                <div class="col col-lg-3">
                    <button class="page-nav-button btn-block text-left text-white previous" v-if="!!previousPage" @click="goToPreviousPage()">
                        <i class="fa fa-fw fa-3x fa-chevron-left"></i>
                    </button>
                </div>
                <div class="col col-lg-3 ml-auto">
                    <button class="page-nav-button btn-block text-right text-white next" v-if="!!nextPage" @click="goToNextPage()">
                        <i class="fa fa-fw fa-3x fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
