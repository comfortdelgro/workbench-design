import {Box, Button, NoSsr, styled} from '@comfortdelgro/react-compass'
import DemoEditor from 'components/common/DemoEditor'
import DemoEditorError from 'components/common/DemoEditorError'
import DemoSandbox from 'components/common/DemoSandbox'
import HighlightedCode from 'components/common/HighlightedCode'
import ReactRunner from 'components/common/ReactRunner'
import {debounce, uniqueId} from 'lodash'
import * as React from 'react'
import {useCodeVariant} from 'utils/codeVariant'

function trimLeadingSpaces(input = '') {
  return input.replace(/^\s+/gm, '')
}

const DemoToolbar = React.lazy(() => import('./DemoToolbar'))

function DemoToolbarFallback() {
  return <Box>Loading...</Box>
}

function getDemoName(location: string) {
  return location.replace(/(.+?)(\w+)\.\w+$$/, '$2')
}

function useDemoData(codeVariant: string, demo: any, githubLocation: string) {
  const userLanguage = 'en'

  return React.useMemo(() => {
    let productId
    let name = 'Material UI'

    let codeOptions = {}

    if (codeVariant === 'TS' && demo.rawTS) {
      codeOptions = {
        codeVariant: 'TS',
        githubLocation: githubLocation.replace(/\.js$/, '.tsx'),
        raw: demo.rawTS,
        Component: demo.tsx,
        sourceLanguage: 'tsx',
      }
    } else {
      codeOptions = {
        codeVariant: 'JS',
        githubLocation,
        raw: demo.raw,
        Component: demo.js,
        sourceLanguage: 'jsx',
      }
    }

    let jsxPreview = demo.jsxPreview

    return {
      scope: demo.scope,
      jsxPreview,
      ...codeOptions,
      title: `${getDemoName(githubLocation)} demo — ${name}`,
      productId,
      language: userLanguage,
    }
  }, [codeVariant, demo, githubLocation, userLanguage])
}

function useDemoElement({
  demoData,
  editorCode,
  setDebouncedError,
  liveDemoActive,
}: any) {
  const debouncedSetError = React.useMemo(
    () => debounce(setDebouncedError, 300),
    [setDebouncedError],
  )

  const BundledComponent = React.useMemo(
    () => <demoData.Component />,
    [demoData],
  )
  const LiveComponent = React.useMemo(
    () => (
      <ReactRunner
        scope={demoData.scope}
        onError={debouncedSetError}
        code={
          editorCode.isPreview
            ? trimLeadingSpaces(demoData.raw).replace(
                trimLeadingSpaces(demoData.jsxPreview),
                editorCode.value,
              )
            : editorCode.value
        }
      />
    ),
    [demoData, debouncedSetError, editorCode.isPreview, editorCode.value],
  )

  // No need for a live environment if the code matches with the component rendered server-side.
  return editorCode.value === editorCode.initialEditorCode &&
    liveDemoActive === false
    ? BundledComponent
    : LiveComponent
}

const DemoCodeViewer = styled(HighlightedCode, {
  '& pre': {
    margin: 0,
    maxHeight: 'min(68vh, 1000px)',
    maxWidth: 'initial',
    borderRadius: 0,
  },
})

export default function Demo(props: any) {
  const {demo, demoOptions, githubLocation} = props

  if (demoOptions.demo.endsWith('.ts') || demoOptions.demo.endsWith('.tsx')) {
    throw new Error(
      [
        `The following demos use TS directly: ${demoOptions.demo}.`,
        '',
        'Please run "yarn docs:typescript:formatted" to generate a JS version and reference it:',
        `{{"demo": "${demoOptions.demo.replace(/\.(.*)$/, '.js')}", …}}.`,
        '',
        "Otherwise, if it's not a code demo hide the toolbar:",
        `{{"demo": "${demoOptions.demo}", …}}.`,
      ].join('\n'),
    )
  }

  const codeVariant = useCodeVariant()

  const demoData: any = useDemoData(codeVariant, demo, githubLocation)

  const [demoHovered, setDemoHovered] = React.useState(false)
  const handleDemoHover = (event: any) => {
    setDemoHovered(event.type === 'mouseenter')
  }

  const demoName = getDemoName(demoData.githubLocation)
  const demoSandboxedStyle = React.useMemo(
    () => ({
      maxWidth: demoOptions.maxWidth,
      height: demoOptions.height,
    }),
    [demoOptions.height, demoOptions.maxWidth],
  )

  if (demoOptions.bg == null) {
    demoOptions.bg = 'outlined'
  }

  if (demoOptions.iframe) {
    demoOptions.bg = true
  }

  const [codeOpen, setCodeOpen] = React.useState(
    demoOptions.defaultCodeOpen || false,
  )
  const shownOnce = React.useRef(false)
  if (codeOpen) {
    shownOnce.current = true
  }

  React.useEffect(() => {
    const navigatedDemoName = getDemoName(window.location.hash)
    if (navigatedDemoName && demoName === navigatedDemoName) {
      setCodeOpen(true)
    }
  }, [demoName])

  const showPreview =
    demoOptions.defaultCodeOpen !== false && Boolean(demoData.jsxPreview)

  const [demoKey, setDemoKey] = React.useReducer((key) => key + 1, 0)

  const demoId = `demo-${uniqueId()}`
  const demoSourceId = `demoSource-${uniqueId()}`
  const openDemoSource = codeOpen || showPreview

  const initialFocusRef = React.useRef(null)

  const isPreview = !codeOpen && showPreview

  const initialEditorCode = isPreview
    ? demoData.jsxPreview
    : demoData.raw.replace(/\n$/, '')
  const [editorCode, setEditorCode] = React.useState({
    value: initialEditorCode,
    isPreview,
    initialEditorCode,
  })

  const resetDemo = () => {
    setEditorCode({
      value: initialEditorCode,
      isPreview,
      initialEditorCode,
    })
    setDemoKey()
  }

  React.useEffect(() => {
    setEditorCode({
      value: initialEditorCode,
      isPreview,
      initialEditorCode,
    })
  }, [initialEditorCode, isPreview])

  const [debouncedError, setDebouncedError] = React.useState(null)

  const [liveDemoActive, setLiveDemoActive] = React.useState(false)

  const demoElement = useDemoElement({
    demoData,
    editorCode,
    setDebouncedError,
    liveDemoActive,
  })

  return (
    <Box>
      <Box
        css={{
          position: 'relative',
          outline: 0,
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        onMouseEnter={handleDemoHover}
        onMouseLeave={handleDemoHover}
      >
        <Button
          ref={initialFocusRef}
          tabIndex={-1}
          css={{
            position: 'absolute',
            top: -15,
            left: 0,
            width: 10,
            height: 12,
            pointerEvents: 'none',
            background: 'gray',
            borderRadius: 10,
            border: 'none',
            '&:focus': {
              background: '$cdgBlue40',
            },
          }}
        />
        <DemoSandbox
          key={demoKey}
          style={demoSandboxedStyle}
          iframe={demoOptions.iframe}
          name={demoName}
          onResetDemoClick={resetDemo}
        >
          {demoElement}
        </DemoSandbox>
      </Box>
      <NoSsr>
        <React.Suspense fallback={<DemoToolbarFallback />}>
          <React.Suspense fallback={<DemoToolbarFallback />}>
            <DemoToolbar
              codeOpen={codeOpen}
              codeVariant={codeVariant}
              demo={demo}
              demoData={demoData}
              demoHovered={demoHovered}
              demoId={demoId}
              demoName={demoName}
              demoOptions={demoOptions}
              demoSourceId={demoSourceId}
              initialFocusRef={initialFocusRef}
              onCodeOpenChange={() => {
                setCodeOpen((open: boolean) => !open)
              }}
              onResetDemoClick={resetDemo}
              openDemoSource={openDemoSource}
              showPreview={showPreview}
            />
          </React.Suspense>
        </React.Suspense>
        <Box>
          {demoOptions.disableLiveEdit ? (
            <DemoCodeViewer
              code={editorCode.value}
              id={demoSourceId}
              language={demoData.sourceLanguage}
              copyButtonProps={{
                'data-ga-event-category': codeOpen ? 'demo-expand' : 'demo',
                'data-ga-event-label': demo.gaLabel,
                'data-ga-event-action': 'copy-click',
              }}
            />
          ) : (
            <DemoEditor
              value={editorCode.value}
              onChange={(value) => {
                setEditorCode({
                  ...editorCode,
                  value,
                })
              }}
              onFocus={() => {
                setLiveDemoActive(true)
              }}
              id={demoSourceId}
              language={demoData.sourceLanguage}
              copyButtonProps={{
                'data-ga-event-category': codeOpen ? 'demo-expand' : 'demo',
                'data-ga-event-label': demo.gaLabel,
                'data-ga-event-action': 'copy-click',
              }}
            >
              <DemoEditorError>{debouncedError}</DemoEditorError>
            </DemoEditor>
          )}
        </Box>
      </NoSsr>
    </Box>
  )
}
