namespace WebPage.Blazor.Src.Services.LogPost;

public interface ILogPostService
{
    Task<List<Domain.LogPosts.LogPost>> GetAllPostsAsync();
    Task<List<string>> GetTagsAsync();
    Task<Domain.LogPosts.LogPost?> GetBySlugAsync(string slug);
}