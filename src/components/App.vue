<template>
    <div id="AppComponent">
        <TopNav></TopNav>

        <div class="sidenav-container">
            <SideNav></SideNav>
        </div>
        <div class="content-container">
            <div class="container-fluid bindr-root" id="router-container">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss" scoped></style>