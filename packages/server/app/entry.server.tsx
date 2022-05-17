import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");
  if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    console.log('adding cors..')
    responseHeaders.set("Access-Control-Allow-Origin", "*");
  }

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
