<script lang="ts" src="./Comics.ts"></script>

<template>
    <div class="ComicsComponent container">
        <h1>Comics</h1>

        <div class="row comics-container mt-4" v-if="Comics">
            <div class="d-inline-block m-3" v-for="comic in Comics" :key="comic.Id">
                <ComicCard :comic="comic"></ComicCard>
            </div>
        </div>
    </div>
</template>

