<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>

<template>
    <div class="AppComponent">
        <TopNav></TopNav>

        <div class="page-container">
            <router-view></router-view>
        </div>

        <FooterNav></FooterNav>
    </div>
</template>