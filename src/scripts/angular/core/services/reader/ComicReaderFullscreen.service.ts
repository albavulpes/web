import angular = require("angular");
import fullscreen = require("fullscreen");
import {AppModule} from "../../../App.module";
import {IPayload} from "../../models/IPayload";

const fullscreenComponentTemplate = "<comic-reader-fullscreen-component>";
var isFullscreen = false;

export class ComicReaderFullscreenService
{
    private fullscreenReader;

    constructor(private $rootScope, private $compile)
    {
    }

    public openFullscreenReader()
    {
        if (isFullscreen)
            return;

        isFullscreen = true;

        // Get the template for this view and take the critical part
        var template = angular.element(fullscreenComponentTemplate);

        var readerElement = template.appendTo(document.body);

        // Initiate the fullscreen request
        this.fullscreenReader = fullscreen(readerElement.get(0));
        this.fullscreenReader.request();

        // Compile the fullscreen window with a scope
        var newScope = this.$rootScope.$new();
        this.$compile(readerElement)(newScope);

        // Set up the event handler to call after close
        this.fullscreenReader.on("release", () =>
        {
            isFullscreen = false;

            this.fullscreenReader.dispose();
            readerElement.remove();
        });
    }

    public closeFullscreenReader()
    {
        if (!isFullscreen || !this.fullscreenReader)
            return;

        this.fullscreenReader.release();
    }
}

AppModule.service("ComicReaderFullscreenService", ComicReaderFullscreenService);
