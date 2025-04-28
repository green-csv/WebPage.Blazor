namespace WebPage.Blazor.Src.Domain.Metadata;

public record VaultMetadata(
    AuthorInfo Author,
    LicenseInfo License,
    RepoInfo Repo,
    string DefaultLanguage,
    IReadOnlyList<string> SupportedLanguages,
    string Description,
    DateTime Generated);