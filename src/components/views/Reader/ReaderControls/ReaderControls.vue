<script lang="ts" src="./ReaderControls.ts"></script>
<style lang="scss" src="./ReaderControls.scss"></style>

<template>
    <div class="ReaderControlsComponent">
        <div class="reader-controls container-fluid">
            <div class="row align-items-center reader-controls-row">
                <div class="col-2 text-left d-none d-sm-block">
                    <button class="btn btn-dark">
                        <i class="fa-lg mdi mdi-view-list"></i>
                    </button>
                </div>
                <div class="col-sm-8">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-auto d-none d-lg-block">
                            <button class="btn btn-dark">
                                <i class="fa-lg mdi mdi-page-first"></i>
                            </button>
                        </div>
                        <div class="col-auto d-none d-sm-block">
                            <button class="btn btn-dark" @click="goToPreviousPage()">
                                <i class="fa-lg mdi mdi-chevron-left"></i>
                            </button>
                        </div>

                        <div class="col-sm-6 col-lg-4 text-center">
                            <button class="btn btn-dark btn-block">
                                <span class="h5">
                                    Chapter 2 - Page {{currentPage.Number}}
                                </span>
                            </button>
                        </div>

                        <div class="col-auto d-none d-sm-block">
                            <button class="btn btn-dark" @click="goToNextPage()">
                                <i class="fa-lg mdi mdi-chevron-right"></i>
                            </button>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <button class="btn btn-dark">
                                <i class="fa-lg mdi mdi-page-last"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-2 text-right d-none d-sm-block">
                    <button class="btn btn-dark">
                        <i class="fa-lg mdi mdi-fullscreen"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
