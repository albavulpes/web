<script lang="ts" src="./App.ts"></script>
<style lang="stylus" src="./App.styl"></style>

<template>
    <div class="AppComponent">
        <v-app dark>
            <TopNav></TopNav>

            <v-content>
                <div class="page-container" id="router-container">
                    <router-view :key="$route.path"></router-view>
                </div>
            </v-content>
        </v-app>
    </div>
</template>