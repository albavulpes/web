import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
    template: require("./AppComponent.html") as string
})
export default class AppComponent extends Vue
{
}
