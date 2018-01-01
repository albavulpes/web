<script lang="ts" src="./Home.ts"></script>

<template>
    <div class="container">
        <div class="card bg-dark text-white">
            <div class="card-body">
                <h1>
                    Welcome to the Home Page!
                </h1>
                <hr class="border-light">
                <h3>
                    Go to the following links for more awesome placeholders:
                </h3>
                <router-link class="btn btn-primary" :to="{name: 'reader'}">
                    Reader
                </router-link>
                <router-link class="btn btn-secondary" :to="{name: 'comic'}">
                    Comics
                </router-link>
            </div>
        </div>
    </div>
</template>

