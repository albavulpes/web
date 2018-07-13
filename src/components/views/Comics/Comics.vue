<script lang="ts" src="./Comics.ts"></script>

<template>
    <div class="ComicsComponent container">
        <h1>Comics</h1>

        <div class="row comics-container mt-4">
            <div class="d-inline-block m-3" v-for="comic in comics" :key="comic.Id">
                <ComicPanel :comic="comic"></ComicPanel>
            </div>
        </div>
    </div>
</template>

