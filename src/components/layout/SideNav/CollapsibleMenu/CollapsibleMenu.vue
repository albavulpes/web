<template>
    <div class="CollapsibleMenuContainer">
        <div class="menu-item" :class="{'collapsed': !isMenuOpen}">
            <div class="menu-item-title" v-if="showTitle">
                <div class="collapse-icon" v-if="entry.type === 'section'">
                    <span class="fa fa-chevron-down"></span>
                </div>

                <a v-if="!entry.url" @click="toggleChild">
                    {{entry.title}}
                </a>

                <router-link v-if="entry.url" :to="'/' + entry.url" exact>
                    {{entry.title}}
                </router-link>
            </div>

            <div class="menu-item-children" v-show="isMenuOpen">
                <CollapsibleMenu v-for="item in entry.children" :entry="item" :key="item.url"></CollapsibleMenu>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CollapsibleMenu.ts"></script>
<style lang="scss" src="./CollapsibleMenu.scss" scoped></style>