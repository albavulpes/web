import fullscreen = require("fullscreen");

import {AppModule} from "../../../../App.module";
import {ComicReaderFullscreenService} from "../../../../core/services/reader/ComicReaderFullscreen.service";

class ComicReaderController implements angular.IController
{
    constructor(private ComicReaderFullscreenService: ComicReaderFullscreenService)
    {
    }
}

AppModule.component("comicReaderComponent", {
    controller: ComicReaderController,
    template: require("./ComicReader.template.html")
});

