<script lang="ts" src="./Reader.ts"></script>
<style lang="scss" src="./Reader.scss"></style>

<template>
    <div class="ReaderComponent">
        <div class="readerContainer d-flex flex-column justify-content-between">
            <div class="readerPagesContainer">
                <ReaderPages :Page="Page"
                    @pages:previous="OnPrevPage"
                    @pages:next="OnNextPage"
                ></ReaderPages>
            </div>
            <div class="readerControlsContainer">
                <ReaderControls :Chapter="Chapter" :Page="Page"
                    @controls:previous="OnPrevPage"
                    @controls:next="OnNextPage"
                ></ReaderControls>
            </div>
        </div>
    </div>
</template>