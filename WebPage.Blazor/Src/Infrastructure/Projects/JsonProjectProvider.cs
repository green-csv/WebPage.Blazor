using System.Net.Http.Json;
using WebPage.Blazor.Src.Services.Projects;
using WebPage.Blazor.Src.UI.ViewModels.Projects;

namespace WebPage.Blazor.Src.Infrastructure.Projects;

public class JsonProjectProvider(HttpClient http) : IProjectService
{
    public async Task<List<ProjectViewModel>> GetProjectsAsync()
    {
        List<ProjectViewModel> projects = 
            await http.GetFromJsonAsync<List<ProjectViewModel>>("data/projects.json") 
            ?? throw new InvalidOperationException();
        
        return projects;
    }
}
