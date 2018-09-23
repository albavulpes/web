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

                <hr>

                <div class="row mb-5" v-if="Arcs">
                    <div class="col-xs-4 col-md-3 col-lg-2" v-for="arc in Arcs">
                        <MediaCard>
                            <template slot="image">
                                <img :src="arc.CoverImage.FullSize" :alt="arc.Title" class="img-fluid">
                            </template>
                            <template slot="title">
                                {{arc.Title}}
                            </template>
                            <template slot="subheading">
                                4 chapters
                            </template>
                        </MediaCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>