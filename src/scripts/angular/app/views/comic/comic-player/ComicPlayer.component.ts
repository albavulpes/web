import {AppModule} from "../../../../App.module";

class ComicPlayerController implements angular.IController
{
}

AppModule.component("comicPlayerComponent", {
    controller: ComicPlayerController,
    template: require("./ComicPlayer.template.html")
});

