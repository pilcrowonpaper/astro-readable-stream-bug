export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode("hello world"));
    },
    cancel() {
      console.log("cancelled");
    },
  });
  return new Response(stream, {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "Content-Type": "text/event-stream; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
