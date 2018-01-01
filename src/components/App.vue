<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>

<template>
    <div class="AppComponent">
        <TopNav></TopNav>

        <div class="page-container" id="router-container">
            <router-view :key="$route.path"></router-view>
        </div>
    </div>
</template>