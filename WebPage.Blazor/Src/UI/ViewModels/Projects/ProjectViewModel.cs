namespace WebPage.Blazor.Src.UI.ViewModels.Projects;

public class ProjectViewModel
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Name { get; set; }
    public required string Description { get; set; }
    public required DateTime CreatedAt { get; set; }
    public required EnumStatus Status { get; set; }
    public required string[] Tags { get; set; }
    public required ProjectLinkViewModel[] Links { get; set; } // GitHub or live demo
    public string? ImagePath { get; set; } // Optional image
}