<script lang="ts" src="./ComicViewer.ts"></script>
<style lang="scss" src="./ComicViewer.scss"></style>

<template>
    <div class="ComicViewerComponent container" v-if="Comic">
        <div class="row">
            <div class="col-lg-auto text-center">
                <div class="mb-4">
                    <img class="coverImage shadow-4" :src="Comic.CoverImage.FullSize" :alt="Comic.Title">
                </div>
            </div>
            <div class="col">
                <h1>
                    {{Comic.Title}}
                </h1>

                <hr>

                <h2 class="h5">
                    <span class="text-white-50">Author: </span>
                    {{Comic.Author}}
                </h2>

                <h2 class="h5" v-if="Comic.IsPublished">
                    <span class="text-white-50">Publish Date: </span>
                    {{Comic.PublishDate | moment('LL')}}
                </h2>

                <hr>

                <p style="white-space: pre-line">
                    <span v-html="Comic.Description"></span>
                </p>

                <hr>

                <template v-if="ChapterGroups">
                    <div v-for="chapterGroup in ChapterGroups">
                        <template v-if="chapterGroup.Arc">
                            <h4 class="my-4">
                                {{chapterGroup.Arc.Title}}
                            </h4>
                        </template>

                        <div class="row">
                            <div class="col-xs-4 col-md-3 col-lg-2" v-for="chapter in chapterGroup.Chapters">
                                <router-link :to="{name: 'chapters.id', params: {ChapterId: chapter.Id}}">
                                    <MediaCard>
                                        <template slot="image">
                                            <img :src="chapter.CoverImage.FullSize" :alt="chapter.Title" class="img-fluid">
                                        </template>
                                        <template slot="title">
                                            {{chapter.Title}}
                                        </template>
                                        <template slot="subheading">
                                            <small>
                                                {{chapter.PagesCount}} {{chapter.PagesCount | pluralize('page')}}
                                            </small>
                                        </template>
                                    </MediaCard>
                                </router-link>
                            </div>
                        </div>

                        <template v-if="chapterGroup.Arc">
                            <hr class="mt-0 mb-5">
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>