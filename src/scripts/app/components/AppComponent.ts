import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: require("./AppComponent.html") as string
})
export default class AppComponent extends Vue
{
}
