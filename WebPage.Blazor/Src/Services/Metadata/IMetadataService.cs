using WebPage.Blazor.Src.Domain.Metadata;

namespace WebPage.Blazor.Src.Services.Metadata;

public interface IMetadataService
{
    Task<VaultMetadata> GetAsync();
}