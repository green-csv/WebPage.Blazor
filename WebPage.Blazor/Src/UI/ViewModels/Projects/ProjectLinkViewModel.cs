namespace WebPage.Blazor.Src.UI.ViewModels.Projects;

public class ProjectLinkViewModel
{
    public required string Label { get; set; } // e.g., "iOS", "Android", "GitHub", "Website"
    public required string Url { get; set; }
    public string Icon { get; set; }
}