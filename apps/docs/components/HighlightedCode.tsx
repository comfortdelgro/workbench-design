import prism from '@comfortdelgro/markdown/prism'
import {NoSsr} from '@comfortdelgro/react-compass'
import CodeCopyButton from 'components/CodeCopyButton'
import MarkdownElement from 'components/MarkdownElement'
import * as React from 'react'
import useCodeCopy from 'utils/hooks/useCodeCopy'

const HighlightedCode = React.forwardRef(function HighlightedCode(
  props: any,
  ref,
) {
  const {
    copyButtonHidden = false,
    code,
    component: Component = MarkdownElement,
    ...other
  } = props
  const renderedCode = React.useMemo(() => {
    return prism(code.trim())
  }, [code])
  const handlers = useCodeCopy()

  return (
    <Component ref={ref} {...other}>
      <div {...handlers}>
        <pre>
          <code
            className={`language-tsx`}
            dangerouslySetInnerHTML={{__html: renderedCode}}
          />
        </pre>
        {copyButtonHidden ? null : (
          <NoSsr>
            <CodeCopyButton code={code} />
          </NoSsr>
        )}
      </div>
    </Component>
  )
})

export default HighlightedCode
