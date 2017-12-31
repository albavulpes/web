<script lang="ts" src="./Reader.ts"></script>
<style lang="stylus" src="./Reader.styl"></style>

<template>
    <div class="ReaderComponent">
        <v-container fluid>
            <v-layout>
                <v-flex>
                    <ReaderPages></ReaderPages>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex>
                    <ReaderControls class="reader-controls-container"></ReaderControls>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>