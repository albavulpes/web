<style lang="scss" src="./FooterNav.scss"></style>

<template>
    <div class="FooterNavComponent container-fluid">
        <div class="row justify-content-center">
            <div class="col-auto">
                <a href="https://github.com/albavulpes/web">
                    <i class="fa fa-lg fa-github"></i>
                    Github Project
                </a>
            </div>
            <div class="col-auto">
                &copy; {{new Date().getFullYear()}} albavulpes. All rights reserved.
            </div>
            <div class="col-auto">
                Maintained by <a href="https://github.com/cypherix93">cypherix93</a>
            </div>
        </div>
    </div>
</template>