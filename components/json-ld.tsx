// Renders JSON-LD as a plain <script> tag so it ships in the server HTML.
// next/script injects it client-side, which crawlers that don't run JS never see.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
