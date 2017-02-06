import {AppModule} from "../../../App.module";
import {registerRoute} from "../../../core/helpers/RoutingHelper";

class HomeController implements angular.IController
{

}

AppModule.component("homeComponent", {
    controller: HomeController,
    template: require("./Home.template.html")
});

registerRoute("home", {
    url: "/",
    template: "<home-component></home-component>",
    data: {
        title: "Home"
    }
});

