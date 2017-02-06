import {AppModule} from "../../App.module";

// HTTP Configuration, like cookie, JWT and error handling
AppModule.config(function ($httpProvider)
{
    $httpProvider.defaults.withCredentials = true;
});