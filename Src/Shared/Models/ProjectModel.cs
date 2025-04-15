using Microsoft.AspNetCore.Components;
using WebPage.Blazor.Src.Shared.Enums;

namespace WebPage.Blazor.Src.Shared.Models;

public class ProjectModel
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Name { get; init; }
    public required string Description { get; set; }
    public required DateTime CreatedAt { get; set; }
    public required EnumStatusProjects Status { get; set; }
    public required string[] Tags { get; init; }
    public required ProjectLink[] Links { get; init; } // GitHub or live demo
    public string? ImagePath { get; init; } // Optional image
}

public class ProjectLink
{
    public required string Label { get; init; } // e.g., "iOS", "Android", "GitHub", "Website"
    public required string Url { get; init; }
    public RenderFragment? Icon { get; set; }
}