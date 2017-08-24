<template>
    <v-layout row>
        <v-flex xs12>
            <v-layout row align-end>
                <v-btn fab icon @click="prevPage">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-flex xs10>
                    <h3>{{currentPage}}</h3>
                </v-flex>
                <v-flex fill-height class="reader-view-controls text-xs-right">
                    <v-btn fab icon class="control-button">
                        <v-icon>mdi-fullscreen</v-icon>
                    </v-btn>
                </v-flex>
                <v-btn fab icon @click="nextPage">
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-layout>
            <v-divider></v-divider>
        </v-flex>
    </v-layout>
</template>

<script lang="ts" src="./Reader.ts"></script>