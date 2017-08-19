<template>
    <div id="AppComponent">
        <TopNav></TopNav>

        <div class="content-container">
            <div class="container-fluid" id="router-container">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss" scoped></style>