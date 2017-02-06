import {IState, IStateProvider} from "angular-ui-router";
import {AppModule} from "../../App.module";

var registeredRoutes = [];

export function registerRoute(name: string, state: IState)
{
    AppModule.config(function ($stateProvider: IStateProvider)
    {
        $stateProvider.state(name, state);
    });
}