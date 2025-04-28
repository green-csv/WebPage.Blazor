namespace WebPage.Blazor.Src.Domain.LogPosts;

public class LogPost
{
    public string Slug { get; set; }
    public List<string> Tags { get; set; }
    public Dictionary<string, LogPostTranslation> Translations { get; set; }
}