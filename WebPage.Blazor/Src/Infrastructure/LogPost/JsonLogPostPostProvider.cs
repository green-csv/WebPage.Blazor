using System.Net.Http.Json;
using WebPage.Blazor.Src.Services.LogPost;

namespace WebPage.Blazor.Src.Infrastructure.LogPost;

public class JsonLogPostPostProvider(HttpClient http) : ILogPostService
{
    public async Task<List<Domain.LogPosts.LogPost>> GetAllPostsAsync()
    {
        List<Domain.LogPosts.LogPost>? posts = await http.GetFromJsonAsync<List<Domain.LogPosts.LogPost>>("posts-assets/posts-index.json");
        return posts ?? [];
    }

    public Task<List<string>> GetTagsAsync()
    {
        throw new NotImplementedException();
    }

    public Task<Domain.LogPosts.LogPost?> GetBySlugAsync(string slug)
    {
        throw new NotImplementedException();
    }
}