<template>
    <div class="SideNavComponent">
        <nav>
            <div v-if="manifest">
                <CollapsibleMenu :entry="manifest" :showTitle="false" :isOpen="true"></CollapsibleMenu>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" src="./SideNav.ts"></script>
<style lang="scss" src="./SideNav.scss" scoped></style>