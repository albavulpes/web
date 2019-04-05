<script lang="ts" src="./ReaderControls.ts"></script>
<style lang="scss" src="./ReaderControls.scss"></style>

<template>
    <div class="ReaderControlsComponent container-fluid" v-if="Page">
        <div class="row align-items-center reader-controls-row">
            <div class="col-2 text-left d-none d-sm-block">
                <button class="btn btn-dark">
                    <i class="mdi mdi-24px mdi-view-list"></i>
                </button>
            </div>
            <div class="col-sm-8">
                <div class="row align-items-center justify-content-center">
                    <div class="col-auto d-none d-lg-block">
                        <button class="btn btn-dark">
                            <i class="mdi mdi-24px mdi-page-first"></i>
                        </button>
                    </div>
                    <div class="col-auto d-none d-sm-block">
                        <button class="btn btn-dark">
                            <i class="mdi mdi-24px mdi-chevron-left"></i>
                        </button>
                    </div>

                    <div class="col-sm-6 col-lg-4 text-center">
                        <b-button variant="dark" block :to="{name: 'chapters.id', params: {ChapterId: Chapter.Id}}">
                            <span class="h5">
                                {{Chapter.Title}} - Page {{Page.PageNumber}}
                            </span>
                        </b-button>
                    </div>

                    <div class="col-auto d-none d-sm-block">
                        <button class="btn btn-dark">
                            <i class="mdi mdi-24px mdi-chevron-right"></i>
                        </button>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <button class="btn btn-dark">
                            <i class="mdi mdi-24px mdi-page-last"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-2 text-right d-none d-sm-block">
                <button class="btn btn-dark">
                    <i class="mdi mdi-24px mdi-fullscreen"></i>
                </button>
            </div>
        </div>
    </div>
</template>
