using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace WebPage.Blazor.Unit.TestUtils;

public sealed class HttpClientMock
{
    public static HttpClient FromJson(string url, string json, HttpStatusCode code = HttpStatusCode.OK)
    {
        var handler = new StubHandler(async _ =>
            new HttpResponseMessage(code)
            {
                Content = new StringContent(json, System.Text.Encoding.UTF8, "application/json")
            });
        return new HttpClient(handler) { BaseAddress = new(url) };
    }

    private sealed class StubHandler : HttpMessageHandler
    {
        private readonly Func<HttpRequestMessage, Task<HttpResponseMessage>> _responder;
        public StubHandler(Func<HttpRequestMessage, Task<HttpResponseMessage>> responder) => _responder = responder;
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage r, CancellationToken t) => _responder(r);
    }
}