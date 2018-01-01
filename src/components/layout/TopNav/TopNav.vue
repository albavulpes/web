<script lang="ts" src="./TopNav.ts"></script>
<style lang="stylus" src="./TopNav.styl"></style>

<template>
    <div class="TopNavComponent">
        <v-toolbar fixed class="primary text-xs-center text-sm-left">
            <v-toolbar-items class="menu-button-container hidden-md-and-up">
                <v-btn flat large class="menu__button">
                    <v-icon class="fa-lg">mdi-menu</v-icon>
                </v-btn>
            </v-toolbar-items>
            <router-link class="white--text brand-link" :to="{name: 'home'}">
                <v-layout row justify-center align-center>
                    <img class="brand-logo" src="../../../assets/images/logo_shadow.png" alt="AlbaVulpes Logo">
                    <v-toolbar-title class="headline">
                        Alba Vulpes
                    </v-toolbar-title>
                </v-layout>
            </router-link>
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
        </v-toolbar>
    </div>
</template>
