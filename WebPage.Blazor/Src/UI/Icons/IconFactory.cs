using Microsoft.AspNetCore.Components;
using WebPage.Blazor.Components.Elements.Icons;

namespace WebPage.Blazor.Src.UI.Icons;

public static class IconFactory
{
    private static readonly Dictionary<string, RenderFragment> IconMap = new()
    {
        { "Apple", builder => { builder.OpenComponent(0, typeof(AppleIcon)); builder.CloseComponent(); } },
        { "LinkedIn", builder => { builder.OpenComponent(0, typeof(LinkedinIcon)); builder.CloseComponent(); } },
        { "CaretLeft", builder => { builder.OpenComponent(0, typeof(CaretLeft)); builder.CloseComponent(); } },
        { "Arrow", builder => { builder.OpenComponent(0, typeof(ArrowIcon)); builder.CloseComponent(); } }
    };

    public static RenderFragment? GetIcon(string key)
    {
        return string.IsNullOrWhiteSpace(key) ? null 
            : IconMap.GetValueOrDefault(key);
    }
}