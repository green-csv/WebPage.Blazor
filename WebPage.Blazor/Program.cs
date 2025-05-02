using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using WebPage.Blazor.App;
using WebPage.Blazor.Src.Infrastructure.LogPost;
using WebPage.Blazor.Src.Infrastructure.Metadata;
using WebPage.Blazor.Src.Infrastructure.Projects;
using WebPage.Blazor.Src.Infrastructure.Settings;
using WebPage.Blazor.Src.Services.LogPost;
using WebPage.Blazor.Src.Services.Metadata;
using WebPage.Blazor.Src.Services.Projects;

WebAssemblyHostBuilder builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services.AddScoped<IProjectService, JsonProjectProvider>();

builder.Services.AddHttpClient<ILogPostService, EntriesLogPostProvider>()
    .ConfigureHttpClient(c =>
        c.BaseAddress = new Uri(EntriesApiSettings.BaseUrl));

builder.Services.AddHttpClient<IMetadataService, HttpMetadataProvider>()
    .ConfigureHttpClient(c =>
        c.BaseAddress = new Uri(EntriesApiSettings.BaseUrl));


await builder.Build().RunAsync();
