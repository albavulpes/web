import {AppModule} from "../../../App.module";
import {registerRoute} from "../../../core/helpers/RoutingHelper";

class ComicController implements angular.IController
{
}

AppModule.component("comicComponent", {
    controller: ComicController,
    template: require("./Comic.template.html")
});

registerRoute("comic", {
    url: "/comic",
    template: "<comic-component></comic-component>",
    data: {
        title: "Comic"
    }
});

