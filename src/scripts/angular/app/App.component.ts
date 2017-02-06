import {AppModule} from "../App.module";

class AppController implements angular.IController
{

}

AppModule.component("appComponent", {
    controller: AppController,
    template: require("./App.template.html")
});

