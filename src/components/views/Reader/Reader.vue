<script lang="ts" src="./Reader.ts"></script>
<style lang="scss" src="./Reader.scss"></style>

<template>
    <div class="ReaderComponent">
        <div class="readerContainer d-flex flex-column justify-content-between">
            <div class="readerPagesContainer">
                <ReaderPages :Page="Page"></ReaderPages>
            </div>
            <div class="readerControlsContainer">
                <ReaderControls :Chapter="Chapter" :Page="Page"></ReaderControls>
            </div>
        </div>
    </div>
</template>