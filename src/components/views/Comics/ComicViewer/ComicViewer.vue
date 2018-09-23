<script lang="ts" src="./ComicViewer.ts"></script>

<template>
    <div class="ComicViewerComponent container-fluid" v-if="Comic">
        <div class="row">
            <div class="col-lg-auto text-center">
                <div class="mb-4">
                    <img class="coverImage shadow-4" :src="Comic.CoverImage.Thumbnail" :alt="Comic.Title">
                </div>
            </div>
            <div class="col">
                <h1>
                    {{Comic.Title}}
                </h1>
                <hr>
                <h5>
                    <span class="text-white-50">Author: </span>
                    {{Comic.Author}}
                </h5>
                <h5>
                    <span class="text-white-50">Release Date: </span>
                    {{Comic.ReleaseDate | moment('LL')}}
                </h5>
                <hr>
                <p style="white-space: pre-line">
                    <span v-html="Comic.Description"></span>
                </p>
            </div>
        </div>
    </div>
</template>