<script lang="ts" src="./Comics.ts"></script>

<template>
    <div class="ComicsComponent container">
        <h1>Comics</h1>

        <div class="row comics-container mt-4" v-if="Comics">
            <div class="px-3" v-for="comic in Comics" :key="comic.Id">
                <router-link :to="{name: 'comics.id', params: {ComicId: comic.Id}}">
                    <MediaCard>
                        <template slot="image">
                            <img class="img-fluid" :src="comic.CoverImage.FullSize" :alt="comic.Title">
                        </template>
                        <template slot="title">
                            {{comic.Title}}
                        </template>
                        <template slot="subheading">
                            {{comic.ChaptersCount}} {{comic.ChaptersCount | pluralize('chapter')}}
                        </template>
                    </MediaCard>
                </router-link>
            </div>
        </div>
    </div>
</template>

