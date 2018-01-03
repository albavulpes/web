<script lang="ts" src="./TopNav.ts"></script>
<style lang="scss" src="./TopNav.scss"></style>

<template>
    <div class="TopNavComponent">
        <nav class="navbar navbar-expand fixed-top navbar-dark bg-primary shadow-3">
            <router-link class="navbar-brand" :to="{name: 'home'}">
                <div class="row align-items-center">
                    <div class="col">
                        <img class="brand-logo" src="../../../assets/images/logo_shadow.png" alt="AlbaVulpes Logo">
                    </div>
                    <div class="col">
                        <div class="h3 brand-name">
                            Alba Vulpes
                        </div>
                    </div>
                </div>
            </router-link>

            <ul class="navbar-nav d-none d-md-flex">
                <li class="nav-item active">
                    <router-link class="btn nav-link" :to="{name: 'home'}">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="btn nav-link" :to="{name: 'comic'}">
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

        <!--<div fixed class="primary text-xs-center text-sm-left">
            <v-toolbar-items class="menu-button-container hidden-md-and-up">
                <v-btn flat large class="menu__button">
                    <v-icon class="fa-lg">mdi-menu</v-icon>
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat large :to="{name: 'home'}" exact>
                    <span class="subheading">
                        Home
                    </span>
                </v-btn>
                <v-btn flat large :to="{name: 'comic'}">
                    <span class="subheading">
                        Comics
                    </span>
                </v-btn>
                <v-btn flat large :to="{name: 'reader'}">
                    <span class="subheading">
                        Reader
                    </span>
                </v-btn>
            </v-toolbar-items>
        </div>-->
    </div>
</template>
