import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'docs/data/components/file/file.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
