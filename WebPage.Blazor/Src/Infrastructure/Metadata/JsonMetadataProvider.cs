using System.Net.Http.Json;
using WebPage.Blazor.Src.Domain.Metadata;
using WebPage.Blazor.Src.Services.Metadata;

namespace WebPage.Blazor.Src.Infrastructure.Metadata;

public sealed class JsonMetadataProvider(HttpClient http) : IMetadataService
{
    private VaultMetadata? _cache;

    public async Task<VaultMetadata> GetAsync()
    {
        if (_cache is not null) return _cache;

        _cache = await http.GetFromJsonAsync<VaultMetadata>("posts-assets/metadata.json")
                 ?? throw new InvalidOperationException();
        
        return _cache;
    }
}