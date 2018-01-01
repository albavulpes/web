<script lang="ts" src="./ReaderControls.ts"></script>
<!--<style lang="stylus" src="./ReaderControls.styl"></style>-->

<template>
    <div class="ReaderControlsComponent">
        <div class="reader-controls">
            <div class="row reader-controls-row">
                <div class="col text-left">
                    <button class="btn">
                        <i class="mdi mdi-view-list"></i>
                    </button>
                </div>
                <div class="col-md-5 col-lg-6">
                    <div class="row justify-content-center">
                        <div class="col">
                            <button class="btn d-none d-sm-block">
                                <i class="mdi mdi-page-first"></i>
                            </button>
                        </div>
                        <div class="col">
                            <button class="btn d-none d-md-block" @click="prevPage()">
                                <i class="mdi mdi-chevron-left"></i>
                            </button>
                        </div>

                        <div class="col-md-5 text-center">
                            <button class="btn btn-block">
                                <span class="h5">{{currentPage}}</span>
                                <span>Chapter 2</span>
                            </button>
                        </div>

                        <div class="col">
                            <button class="btn d-none d-md-block" @click="nextPage()">
                                <i class="mdi mdi-chevron-right"></i>
                            </button>
                        </div>
                        <div class="col">
                            <button class="btn d-none d-sm-block">
                                <i class="mdi mdi-page-last"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col text-right">
                    <button class="btn">
                        <i class="mdi mdi-fullscreen"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
