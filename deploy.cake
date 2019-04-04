#addin Cake.WebDeploy

var target = Argument("target", "Default");

var machine = EnvironmentVariable("PUBLISH_MACHINE");
var site = EnvironmentVariable("PUBLISH_SITE");
var username = EnvironmentVariable("PUBLISH_CREDENTIALS_USR");
var password = EnvironmentVariable("PUBLISH_CREDENTIALS_PSW");

if (string.IsNullOrWhiteSpace(machine)) {
	Error("Publish machine not provided.");

	return;
}

if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password)) {
	Error("Publish credentials not provided.");

	return;
}

Task("Zip")
    .Does(() =>
    {
        CleanDirectories("release");
        CreateDirectory("release");

        Zip("./dist", "release/release.zip");
    });

Task("Deploy")
    .Does(() =>
    {
        DeployWebsite(new DeploySettings()
        {
            SourcePath = "./release/release.zip",
			UseAppOffline = true,

            SiteName = site,
            ComputerName = machine,
            Username = username,
            Password = password
        });
    });
	
Task("Default")
    .IsDependentOn("Zip")
    .IsDependentOn("Deploy");

RunTarget(target);