using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace WebPage.Blazor;

public abstract class BootInteropBase : ComponentBase
{
    [Inject] protected IJSRuntime JS { get; set; }

    private bool _booted = false;

    /// <summary>
    /// Delegate to customize what runs during the boot phase.
    /// </summary>
    protected virtual Func<IJSRuntime, Task> BootAction =>
        js => js.InvokeVoidAsync("bootInterop.start").AsTask();

    protected async Task RunBootInteropAsync(bool firstRender)
    {
        if (firstRender && !_booted)
        {
            _booted = true;
            await BootAction(JS);
        }
    }
}

// For layout components
public abstract class BootInteropLayoutBase : LayoutComponentBase
{
    [Inject] protected IJSRuntime JS { get; set; }

    private bool _booted = false;

    /// <summary>
    /// Delegate to customize what runs during the boot phase.
    /// </summary>
    protected virtual Func<IJSRuntime, Task> BootAction =>
        js => js.InvokeVoidAsync("bootInterop.start").AsTask();

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && !_booted)
        {
            _booted = true;
            await BootAction(JS);
        }
    }
}

// For normal components
public abstract class BootInteropComponentBase : BootInteropBase
{
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await RunBootInteropAsync(firstRender);
    }
}