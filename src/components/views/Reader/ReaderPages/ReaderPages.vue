<script lang="ts" src="./ReaderPages.ts"></script>
<style lang="scss" src="./ReaderPages.scss"></style>

<template>
    <div class="ReaderPagesComponent">
        <div class="pagesContainer d-flex align-items-center justify-content-center">
            <div class="pageContent">
                <transition name="fade" mode="out-in">
                    <img class="pageImage card border-0 shadow-4" :src="Page.CoverImage.FullSize" alt="Current Page" :key="Page.Id">
                </transition>
            </div>
        </div>

        <div class="pageNavButtons">
            <div class="d-flex h-100">
                <div class="col-6 col-lg-3 p-0">
                    <button class="page-nav-button btn-block text-left text-white previous" @click="GoToPrevPage">
                        <i class="mdi mdi-48px mdi-chevron-left"></i>
                    </button>
                </div>
                <div class="col-6 col-lg-3 p-0 ml-auto">
                    <button class="page-nav-button btn-block text-right text-white next" @click="GoToNextPage">
                        <i class="mdi mdi-48px mdi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
