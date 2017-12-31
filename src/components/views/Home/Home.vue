<script lang="ts" src="./Home.ts"></script>

<template>
    <v-container>
        <v-card>
            <v-card-title>
                <v-layout style="flex: 1">
                    <v-flex>
                        <h2>
                            Welcome to the Home Page!
                        </h2>
                        <v-divider></v-divider>
                        <h4>
                            Go to the following links for more awesome placeholders:
                        </h4>
                        <v-btn primary :to="{name: 'reader'}">
                            Reader
                        </v-btn>
                        <v-btn :to="{name: 'comic'}">
                            Comic
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-title>
        </v-card>
    </v-container>
</template>

