<script lang="ts" src="./Comics.ts"></script>

<template>
    <div class="ComicsComponent container">
        <h1>Comic Page</h1>

        <hr class="border-white">

        <div class="comics-container row">
            <div class="d-inline-block m-3" v-for="comic in comics" :key="comic.Id">
                <ComicPanel :comic="comic"></ComicPanel>
            </div>
        </div>
    </div>
</template>

