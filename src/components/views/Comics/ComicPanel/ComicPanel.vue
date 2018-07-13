<script lang="ts" src="./ComicPanel.ts"></script>
<style lang="scss" src="./ComicPanel.scss"></style>

<template>
    <div class="ComicPanelComponent">
        <div class="comic-card">
            <div class="comic-cover-container shadow-4">
                <img class="img-fluid" :src="Comic.CoverImage.Main" :alt="Comic.Title">
            </div>
            <div class="mt-2 px-1">
                <h3 class="h5 comic-cover-title text-white font-weight-light">
                    {{Comic.Title}}
                </h3>
                <p class="text-info">
                    {{NumberOfArcs}} arcs
                </p>
            </div>
        </div>
    </div>
</template>