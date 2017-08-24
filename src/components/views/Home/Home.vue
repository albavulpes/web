<template>
    <v-layout row wrap>
        <v-flex xs12>
            <div class="display-3">
                Welcome to the Home Page!
            </div>
            <hr>
            <div class="display-1">
                Go to the following links for more awesome placeholders:
            </div>
            <router-link :to="{name: 'comic'}">
                Comic
            </router-link>
            <router-link :to="{name: 'reader'}">
                Reader
            </router-link>
        </v-flex>
    </v-layout>
</template>

<script lang="ts" src="./Home.ts"></script>