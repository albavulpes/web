<template>
    <div class="TopNavComponent">
        <v-toolbar fixed scroll-off-screen class="primary">
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm11 md10 lg9 xl8>
                        <a href="#" class="headline white--text brand-link">
                            <img class="brand-logo" src="../../../assets/images/logo.png" alt="AlbaVulpes Logo" width="64" height="64">
                            <v-toolbar-title class="headline">
                                AlbaVulpes
                            </v-toolbar-title>
                        </a>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-toolbar>
    </div>
</template>

<script lang="ts" src="./TopNav.ts"></script>
<style lang="stylus" src="./TopNav.styl" scoped></style>