import {AppModule} from "../../../App.module";

// Toastr configuration
AppModule.config(function ($uibTooltipProvider)
{
    $uibTooltipProvider.options({
        appendToBody: true
    });
});