<template>
    <div id="AppComponent">
        <v-app dark>
            <TopNav></TopNav>

            <main>
                <v-container fluid id="router-container">
                    <v-layout align-center justify-center>
                        <v-flex xs12 sm11 md10 lg9 xl8>
                            <router-view :key="$route.fullPath"></router-view>
                        </v-flex>
                    </v-layout>
                </v-container>
            </main>
        </v-app>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="stylus" src="./App.styl" scoped></style>