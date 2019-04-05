<script lang="ts" src="./ChapterViewer.ts"></script>
<style lang="scss" src="./ChapterViewer.scss"></style>

<template>
    <div class="ChapterViewerComponent container" v-if="Chapter">
        <div class="row">
            <div class="col-lg-auto text-center">
                <div class="mb-4">
                    <img class="coverImage shadow-4" :src="Chapter.CoverImage.FullSize" :alt="Chapter.Title">
                </div>
            </div>
            <div class="col">
                <h1>
                    {{Chapter.Title}}
                </h1>

                <hr>

                <h5>
                    <span class="text-white-50">Author: </span>
                    {{Chapter.Author}}
                </h5>

                <h5 v-if="Chapter.IsPublished">
                    <span class="text-white-50">Publish Date: </span>
                    {{Chapter.PublishDate | moment('LL')}}
                </h5>

                <hr>

                <p style="white-space: pre-line">
                    <span v-html="Chapter.Description"></span>
                </p>

                <hr>

                <template v-if="Pages">
                    <h4 class="my-4">
                        Pages
                    </h4>

                    <div class="row">
                        <div class="col-xs-4 col-md-3 col-lg-2" v-for="page in Pages">
                            <router-link :to="{name: 'comics.id', params: {ChapterId: page.Id}}">
                                <MediaCard>
                                    <template slot="image">
                                        <img :src="page.CoverImage.FullSize" :alt="page.Title" class="img-fluid">
                                    </template>
                                    <template slot="title">
                                        Page {{page.PageNumber}}
                                    </template>
                                </MediaCard>
                            </router-link>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>