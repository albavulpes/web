<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss"></style>

<template>
    <div class="HomeComponent">
        <div class="topBanner">
            <div class="topBannerOverlay d-flex align-items-end justify-content-end">
                <div class="topBannerTitles text-right">
                    <div class="d-flex align-items-center">
                        <div>
                            <h1 class="topBannerMainTitle text-white">
                                Alba Vulpes
                            </h1>

                            <p class="topBannerSubTitle text-white font-italic font-weight-lighter">
                                Morality, like art, means drawing a line someplace
                            </p>
                        </div>
                        <div class="px-3">
                            <img src="https://albavulpes-common-assets.s3.amazonaws.com/brand/logo_shadow.png" alt="Alba Vulpes Logo" height="160">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mainContent">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <h1>
                        Welcome!
                    </h1>
                    <hr class="border-light">

                    <div class="d-flex justify-content-center">
                        <b-card class="bg-transparent text-center">
                            <i class="mdi mdi-library-books" style="font-size: 84px"></i>

                            <br>

                            <p class="my-3 text-white">
                                I'm an aspiring artist that likes to draw and do art stuff. I dont know what you do, put a better "bio" line here.
                            </p>

                            <router-link class="btn btn-primary mt-3" :to="{name: 'comics'}">
                                Check out my Comics
                            </router-link>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

