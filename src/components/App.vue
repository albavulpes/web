<template>
    <div id="AppComponent">
        <v-app dark>
            <TopNav></TopNav>

            <main>
                <v-container id="router-container">
                    <router-view :key="$route.fullPath"></router-view>
                </v-container>
            </main>
        </v-app>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="stylus" src="./App.styl" scoped></style>