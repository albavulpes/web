<script lang="ts" src="./Comics.ts"></script>

<template>
    <div class="ComicsComponent container">
        <h1>Comic Page</h1>

        <hr class="border-white">

        <div class="comics-container">
            <ComicPanel v-for="comic in comics" :comic="comic" :key="comic.Id"></ComicPanel>
        </div>
    </div>
</template>

