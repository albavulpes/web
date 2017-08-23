<template>
    <div class="TopNavComponent">
        <v-toolbar fixed scroll-off-screen class="primary">
            <v-toolbar-side-icon class="btn--large hidden-md-and-up"></v-toolbar-side-icon>
            <a href="#" class="headline white--text brand-link">
                <img class="brand-logo" src="../../../assets/images/logo.png" alt="AlbaVulpes Logo" width="64" height="64">
                <v-toolbar-title class="headline">
                    Alba Vulpes
                </v-toolbar-title>
            </a>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat large>
                    <span class="subheading">Home</span>
                </v-btn>
                <v-btn flat large>
                    <span class="subheading">Comics</span>
                </v-btn>
                <v-btn flat large>
                    <span class="subheading">Art</span>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script lang="ts" src="./TopNav.ts"></script>
<style lang="stylus" src="./TopNav.styl" scoped></style>