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
                            <img src="../../../assets/home-comics-icon.png" alt="Comics Icon" height="150" />

                            <br>

                            <p class="my-3 text-white">
                                I'm an artist who loves to write stories and draw comics.
                            </p>
                            <p class="my-3 text-white">
                                Check out my <a class="text-white font-weight-bold" href="https://www.instagram.com/albavulpes" target="_blank"><i class="mdi mdi-instagram"></i> Instagram</a> for more cool stuff!
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

