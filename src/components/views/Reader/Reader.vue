<template>
    <div>
        <v-layout row>
            <v-flex xs12 offset-md3 offset-lg2>
                <v-layout row align-end>
                    <v-btn fab icon @click="prevPage()">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-flex>
                        <h3>{{currentPage}}</h3>
                    </v-flex>
                    <v-flex class="reader-view-controls text-xs-right">
                        <v-btn fab icon class="control-button">
                            <v-icon>mdi-fullscreen</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-btn fab icon @click="nextPage()">
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
            <v-flex md3 lg2 class="hidden-sm-and-down">
                <v-list dense>
                    <template v-for="page in pages">
                        <v-list-tile :key="page" v-model="currentPage" @click="selectPage(page)">
                            <v-list-tile-content>
                                <v-list-tile-title>{{page}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-flex>
            <v-flex>
                <v-layout justify-center>
                    <v-flex text-xs-center>
                        <img :src="`/assets/images/comic/${currentPage}`" :alt="currentPage">
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts" src="./Reader.ts"></script>