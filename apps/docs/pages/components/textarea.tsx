import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'docs/data/components/textarea/textarea.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
