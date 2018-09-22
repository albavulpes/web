<script lang="ts" src="./Arcs.ts"></script>

<template>
    <div class="ArcsComponent container">
        <h1>Arcs</h1>

        <div class="row comics-container mt-4">
            <div class="d-inline-block m-3" v-for="comic in comics" :key="comic.Id">
                <ComicPanel :comic="comic"></ComicPanel>
            </div>
        </div>
    </div>
</template>

