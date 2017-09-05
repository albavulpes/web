<template>
    <div>
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
    </div>
</template>

<script lang="ts" src="./Reader.ts"></script>
<style lang="stylus" src="./Reader.styl" scoped></style>