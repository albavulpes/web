<script lang="ts" src="./App.ts"></script>
<style lang="stylus" src="./App.styl"></style>

<template>
    <div id="AppComponent">
        <v-app dark>
            <TopNav></TopNav>

            <main>
                <div class="page-container" id="router-container">
                    <router-view :key="$route.fullPath"></router-view>
                </div>
            </main>
        </v-app>
    </div>
</template>