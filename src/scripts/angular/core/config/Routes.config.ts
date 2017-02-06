import {AppModule} from "../../App.module";
import {AuthService} from "../services/auth/Auth.service";
import {IStateService, IState} from "angular-ui-router";

// Configure Angular App Routes
AppModule.config(function ($locationProvider, $urlRouterProvider)
{
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("");

    // Default when no state provided
    $urlRouterProvider.otherwise("/");
});

// Configure router authentication
AppModule.run(function ($rootScope, $state: IStateService, AuthService: AuthService)
{
    $rootScope.$on("$stateChangeSuccess", function (event, toState: IState)
    {
        if (toState.data && toState.data.title)
        {
            $rootScope.pageTitle = toState.data.title;
        }
    });

    $rootScope.$on("$stateChangeStart", function (event, toState: IState)
    {
        if (toState.data && toState.data.authenticate && !AuthService.isAuthenticated())
        {
            $state.go("login", {redirectTo: toState.name});
            event.preventDefault();
        }
    });
});