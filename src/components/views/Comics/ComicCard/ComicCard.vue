<script lang="ts" src="./ComicCard.ts"></script>

<template>
    <div class="ComicPanelComponent">
        <router-link :to="{name: 'comics.id', params: {ComicId: Comic.Id}}">
            <MediaCard>
                <template slot="image">
                    <img class="img-fluid" :src="Comic.CoverImage.FullSize" :alt="Comic.Title">
                </template>
                <template slot="title">
                    {{Comic.Title}}
                </template>
                <template slot="subheading">
                    {{Comic.ArcsCount}} arcs
                </template>
            </MediaCard>
        </router-link>
    </div>
</template>