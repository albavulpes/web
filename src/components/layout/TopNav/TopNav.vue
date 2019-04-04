<style lang="scss" src="./TopNav.scss"></style>

<template>
    <nav class="TopNavComponent navbar navbar-expand fixed-top navbar-dark bg-primary shadow-3">
        <router-link class="navbar-brand" :to="{name: 'home'}">
            <div class="row align-items-center">
                <div class="col">
                    <img class="brand-logo" src="https://albavulpes-common-assets.s3.amazonaws.com/brand/logo_shadow.png" alt="AlbaVulpes Logo">
                </div>
                <div class="col">
                    <div class="h3 brand-name">
                        Alba Vulpes
                    </div>
                </div>
            </div>
        </router-link>
        /scripts/api/m
        <ul class="navbar-nav d-none d-md-flex">
            <li class="nav-item active">
                <router-link class="btn nav-link" :to="{name: 'home'}">
                    Home
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn nav-link" :to="{name: 'comics'}">
                    Comics
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn nav-link" :to="{name: 'reader'}">
                    Reader
                </router-link>
            </li>
        </ul>
    </nav>
</template>
