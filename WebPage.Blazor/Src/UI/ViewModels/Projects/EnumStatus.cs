using System.Text.Json.Serialization;

namespace WebPage.Blazor.Src.UI.ViewModels.Projects;

[JsonConverter(typeof(JsonStringEnumConverter))] 
public enum EnumStatus
{
    InProgress,
    Completed,
    Active,
    Archived,
    Started,
}