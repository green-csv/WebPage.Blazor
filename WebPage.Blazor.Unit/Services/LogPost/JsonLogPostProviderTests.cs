using FluentAssertions;
using WebPage.Blazor.Src.Infrastructure.LogPost;
using WebPage.Blazor.Src.Services.LogPost;
using WebPage.Blazor.Unit.TestUtils;

namespace WebPage.Blazor.Unit.Services.LogPost;

public class JsonLogPostProviderTests
{
    private const string Json = """
                                [
                                  {
                                    "slug": "wasm-blazor",
                                    "tags": ["blazor","wasm","web"],
                                    "translations": {
                                      "en": { "title": "t", "date": "2025-01-01", "filename": "f", "summary": "s", "cover": "c" }
                                    }
                                  }
                                ]
                                """;

    private static ILogPostService BuildSut() =>
        new EntriesLogPostProvider(
            HttpClientMock.FromJson("https://entries.greencsv.dev/", Json));

    [Fact]
    public async Task GetAllPosts_returns_one_item()
    {
        ILogPostService sut   = BuildSut();
        List<Src.Domain.LogPosts.LogPost> posts = await sut.GetAllPostsAsync();
        posts.Should().HaveCount(1);
    }

    [Fact]
    public async Task GetTags_returns_distinct_tags()
    {
        ILogPostService sut  = BuildSut();
        List<string> tags = await sut.GetTagsAsync();
        tags.Should().BeEquivalentTo("blazor", "wasm", "web");
    }

    [Fact]
    public async Task GetBySlug_returns_matching_post()
    {
        ILogPostService sut   = BuildSut();
        Src.Domain.LogPosts.LogPost? post  = await sut.GetBySlugAsync("wasm-blazor");
        post.Should().NotBeNull();
    }
}