using Microsoft.AspNetCore.Components;
using WebPage.Blazor.Components.Icons;

namespace WebPage.Blazor.Src.Shared;

public static class GreenIcons
{
    public static RenderFragment Apple => builder =>
    {
        builder.OpenComponent(0, typeof(AppleIcon));
        builder.CloseComponent();
    };

    public static RenderFragment LinkedIn => builder =>
    {
        builder.OpenComponent(0, typeof(LinkedinIcon));
        builder.CloseComponent();   
    };
    
    /*public static RenderFragment GitHub => builder =>
    {
        builder.OpenComponent(0, typeof(GitHubIcon));
        builder.CloseComponent();
    };*/

    public static RenderFragment Arrow => builder =>
    {
        builder.OpenComponent(0, typeof(ArrowIcon));
        builder.CloseComponent();
    };
}