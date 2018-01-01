<script lang="ts" src="./Home.ts"></script>

<template>
    <div class="container-fluid">
        <div class="card bg-dark text-white">
            <div class="card-body">
                <h1>
                    Welcome to the Home Page!
                </h1>
                <hr class="border-light">
                <h3>
                    Go to the following links for more awesome placeholders:
                </h3>
                <button type="button" class="btn btn-primary" :to="{name: 'reader'}">
                    Reader
                </button>
                <button type="button" class="btn btn-default" :to="{name: 'comic'}">
                    Comic
                </button>
            </div>
        </div>
    </div>
</template>

