import {AppModule} from "../../../App.module";
import {registerRoute} from "../../../core/helpers/RoutingHelper";

class Controller implements angular.IComponentController
{

}

AppModule.component("editorComponent", {
    controller: Controller,
    template: require("./Editor.template.html")
});

registerRoute("editor", {
    url: "/editor",
    template: "<editor-component></editor-component>",
    data: {
        title: "Editor's Panel"
    }
});

