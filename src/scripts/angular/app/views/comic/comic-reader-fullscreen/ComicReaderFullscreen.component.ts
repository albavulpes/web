import fullscreen = require("fullscreen");

import {AppModule} from "../../../../App.module";
import {ComicReaderFullscreenService} from "../../../../core/services/reader/ComicReaderFullscreen.service";

class ComicReaderFullscreen implements angular.IController
{
    constructor(private ComicReaderFullscreenService: ComicReaderFullscreenService)
    {
    }
}

AppModule.component("comicReaderFullscreenComponent", {
    controller: ComicReaderFullscreen,
    template: require("./ComicReaderFullscreen.template.html")
});
