using FluentAssertions;
using WebPage.Blazor.Src.Domain.Metadata;
using WebPage.Blazor.Src.Infrastructure.Metadata;
using WebPage.Blazor.Src.Services.Metadata;
using WebPage.Blazor.Unit.TestUtils;

namespace WebPage.Blazor.Unit.Services.Metadata;

public class HttpMetadataProviderTests
{
    private const string Json = """
                                {
                                  "author": { "name": "A", "email": "a@b.c", "url": "u" },
                                  "license": { "type": "CC", "url": "l" },
                                  "repo": { "name": "r", "url": "g", "branch": "main" },
                                  "defaultLanguage": "en",
                                  "supportedLanguages": ["en"],
                                  "description": "d",
                                  "generated": "2025-01-01T00:00:00Z"
                                }
                                """;

    private static IMetadataService BuildSut() =>
        new HttpMetadataProvider(
            HttpClientMock.FromJson("https://entries.greencsv.dev/", Json));

    [Fact]
    public async Task GetAsync_returns_metadata()
    {
        IMetadataService sut  = BuildSut();
        VaultMetadata meta = await sut.GetAsync();
        meta!.Author.Name.Should().Be("A");
    }

    [Fact]
    public async Task Second_call_hits_cache_not_http()
    {
        IMetadataService sut  = BuildSut();
        VaultMetadata first = await sut.GetAsync();
        VaultMetadata second = await sut.GetAsync();
        ReferenceEquals(first, second).Should().BeTrue();
    }
}