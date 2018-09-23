<script lang="ts" src="./ComicCard.ts"></script>

<template>
    <div class="ComicPanelComponent">
        <MediaCard>
            <template slot="image">
                <img class="img-fluid" :src="Comic.CoverImage.FullSize" :alt="Comic.Title">
            </template>
            <template slot="title">
                {{Comic.Title}}
            </template>
            <template slot="subheading">
                {{NumberOfArcs}} arcs
            </template>
        </MediaCard>
    </div>
</template>