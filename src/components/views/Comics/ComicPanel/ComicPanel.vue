<script lang="ts" src="./ComicPanel.ts"></script>

<template>
    <div class="ComicPanelComponent">
        <div class="card bg-dark text-white my-5 shadow-4 comic-card" :key="comic.Id">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="card border-0 shadow-2">
                            <img class="img-fluid" :src="comic.CoverImage.Thumbnail" :alt="comic.Title">
                        </div>
                    </div>
                    <div class="col">
                        <div class="row h-100 flex-column">
                            <div class="col">
                                <div class="h2">
                                    {{comic.Title}}
                                </div>
                                <hr class="border-light">
                                <p v-html="comic.Description"></p>
                            </div>
                            <div class="col-auto text-right">
                                <button type="button" class="btn btn-outline-secondary">
                                    Some Action
                                </button>
                                <button type="button" class="btn btn-primary">
                                    View Comic
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>