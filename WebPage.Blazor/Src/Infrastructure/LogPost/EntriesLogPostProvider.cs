using System.Net.Http.Json;
using WebPage.Blazor.Src.Services.LogPost;
using WebPage.Blazor.Src.Domain.LogPosts;

namespace WebPage.Blazor.Src.Infrastructure.LogPost;

/// <summary>
/// Fetches read-only post data from posts-assets/*.json on entries.greencsv.dev.
/// </summary>
public sealed class EntriesLogPostProvider(HttpClient http) : ILogPostService
{
    private const string IndexPath = "posts-assets/index.json";
    private IReadOnlyList<Domain.LogPosts.LogPost>? _cache;

    public async Task<List<Domain.LogPosts.LogPost>> GetAllPostsAsync()
    {
        if (_cache is not null) return _cache.ToList();

        try
        {
            _cache = await http.GetFromJsonAsync<List<Domain.LogPosts.LogPost>>(IndexPath) ?? [];
        }
        catch (HttpRequestException)
        {
            _cache = [];
        }

        return _cache.ToList();
    }

    public async Task<List<string>> GetTagsAsync()
    {
        List<Domain.LogPosts.LogPost> posts = await GetAllPostsAsync();
        return posts
            .SelectMany(p => p.Tags ?? [])
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();
    }

    public async Task<Domain.LogPosts.LogPost?> GetBySlugAsync(string slug)
    {
        if (string.IsNullOrWhiteSpace(slug))
            return null;

        List<Domain.LogPosts.LogPost> posts = await GetAllPostsAsync();
        return posts.FirstOrDefault(
            p => p.Slug.Equals(slug, StringComparison.OrdinalIgnoreCase));
    }
}