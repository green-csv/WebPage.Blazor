using WebPage.Blazor.Src.UI.ViewModels.Projects;

namespace WebPage.Blazor.Src.Services.Projects;

public interface IProjectService
{
    Task<List<ProjectViewModel>> GetProjectsAsync();
}