import{j as t}from"./jsx-runtime-9ef10904.js";import{H as m}from"./heart-filled-5f2b210b.js";import{R as j,r as a}from"./index-6c164b11.js";import{S as e}from"./index-ead5321a.js";import"./index-e81b8c34.js";import"./index-e89f60cb.js";import"./index-4f6b7c55.js";import"./index-15c598e9.js";import"./index-ec8b205c.js";import"./index-a6cd513d.js";import"./index-9e847335.js";import"./index-8c96f1ee.js";import"./index-f0ea8199.js";import"./index-0fca4dc9.js";import"./index-b524196d.js";import"./index-9709637b.js";import{C as c}from"./index-aa805ad1.js";import"./index-81648b60.js";import"./index-8afc989f.js";import"./index-d47d2ae7.js";import"./index-a28a8ffa.js";import"./index-6fbcb633.js";import"./index-074620d7.js";import"./index-bab47577.js";import"./index-0a028ca0.js";import"./index-f9d7abc3.js";import"./index-f940c060.js";import"./Viewer-447f3689.js";import"./calendar-6211b21f.js";import"./NumberParser-89118490.js";import"./index-1727c636.js";import"./index-0d2269a8.js";import"./index-b7266972.js";import"./index-ce80528f.js";import"./index-8f883b6b.js";import"./index-a485d6a8.js";import"./index-a93d41cd.js";import"./index-d42081dd.js";import"./index-743890f1.js";import"./index-e2c6e307.js";import"./index-0a77337a.js";import"./index-2b918943.js";import"./index-d88a2748.js";import"./index-17087710.js";import"./index-78db8da5.js";import"./index-4259cd01.js";import{R as n}from"./index-c8954287.js";import"./index-8d0f66a3.js";import"./index-bc84cfa4.js";import"./index-219208da.js";import"./index-7d11381a.js";import"./index-01156645.js";import"./index-7c02b6e0.js";import"./video-player-9ad7071f.js";import"./useSnackbar-41e96bd3.js";import"./index-2cad8c03.js";import"./index-a8b6e51e.js";import"./index-1299058a.js";import"./index-c7d502d2.js";import"./index-64aa9fbd.js";import"./index-19e37ff7.js";import"./index-9242378d.js";import"./index-c9ae0d87.js";import"./index-d7c7ead6.js";import"./useCurrentTheme-3076cf6b.js";import"./index-545f196b.js";import"./index-43a16e3f.js";import"./index-e64a24f7.js";import"./index-21379b2e.js";import"./index-8de6e878.js";import"./index-92999917.js";import"./Row-7065e1c2.js";import"./useKeyboardNavigation-fc00b2dd.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-e90bd687.js";import"./index-e08ff86c.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-ca8a9d53.js";import"./button-a57955c5.js";import"./date-picker-fed2c6ef.js";import"./dropdown-textfield-0ae1254d.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-1e446f38.js";import"./slide-action-be0d0808.js";import"./speed-dial-3dbe3c21.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-57517b5f.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-4876dc22.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-d4744197.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const o=()=>{const[l,g]=j.useState("up"),[r,s]=a.useState(!1),[p,v]=a.useState(!0),[d,f]=a.useState(!1),S=()=>{s(!r)};return t.jsxs("div",{style:{padding:"10px"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem",boxSizing:"border-box"},children:[t.jsx("div",{children:t.jsxs(n.Group,{value:l,onChange:i=>{g(i)},css:{flexDirection:"row"},children:[t.jsx(n,{description:"Up",value:"up",id:"item1"}),t.jsx(n,{description:"Down",value:"down"}),t.jsx(n,{description:"Left",value:"left"}),t.jsx(n,{description:"Right",value:"right"})]})}),t.jsxs("div",{children:[t.jsx(c,{isSelected:p,onChange:i=>{v(i)},children:"Use hover event"}),t.jsx(c,{isSelected:d,onChange:i=>{f(i)},children:"Float on bottom right"})]})]}),t.jsx("div",{style:{position:"relative",width:"100%",height:"400px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed #ccc"},children:t.jsx(e,{showing:r,actions:t.jsxs(e.Actions,{position:l,children:[t.jsx(e.Button,{children:t.jsx(m,{})}),t.jsx(e.Button,{children:t.jsx(m,{})})]}),style:d&&{position:"absolute",right:"20px",bottom:"20px"},onMouseLeave:()=>{p&&s(!1)},children:t.jsx(e.Button,{onClick:()=>S(),onMouseEnter:()=>{p&&s(!0)},children:t.jsx(m,{style:{...r&&{transform:"rotate(45deg)"},transition:"all 0.2s"}})})})})]})},Co={title:"Example/Speed Dial 2",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Positions"};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [position, setPosition] = React.useState<'up' | 'down' | 'left' | 'right'>('up');
  const [showing, setShowing] = useState(false);
  const [useHover, setUseHover] = useState(true);
  const [floatPosition, setFloatPosition] = useState(false);
  const toggleSpeedDial = () => {
    setShowing(!showing);
  };
  return <div style={{
    padding: '10px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      padding: '3rem',
      boxSizing: 'border-box'
    }}>
        <div>
          <Radio.Group value={position} onChange={position => {
          setPosition((position as 'up' | 'down' | 'left' | 'right'));
        }} css={{
          flexDirection: 'row'
        }}>
            <Radio description='Up' value='up' id='item1' />
            <Radio description='Down' value='down' />
            <Radio description='Left' value='left' />
            <Radio description='Right' value='right' />
          </Radio.Group>
        </div>
        <div>
          <Checkbox isSelected={useHover} onChange={event => {
          setUseHover(event);
        }}>
            Use hover event
          </Checkbox>
          <Checkbox isSelected={floatPosition} onChange={event => {
          setFloatPosition(event);
        }}>
            Float on bottom right
          </Checkbox>
        </div>
      </div>
      <div style={{
      position: 'relative',
      width: '100%',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed #ccc'
    }}>
        <SpeedDial2 showing={showing} actions={<SpeedDial2.Actions position={position}>
              <SpeedDial2.Button>
                <HeartFilled />
              </SpeedDial2.Button>
              <SpeedDial2.Button>
                <HeartFilled />
              </SpeedDial2.Button>
            </SpeedDial2.Actions>} style={floatPosition && {
        position: 'absolute',
        right: '20px',
        bottom: '20px'
      }} onMouseLeave={() => {
        if (!useHover) {
          return;
        }
        setShowing(false);
      }}>
          <SpeedDial2.Button onClick={() => toggleSpeedDial()} onMouseEnter={() => {
          if (!useHover) {
            return;
          }
          setShowing(true);
        }}>
            <HeartFilled style={{
            ...(showing && {
              transform: 'rotate(45deg)'
            }),
            ...{
              transition: 'all 0.2s'
            }
          }} />
          </SpeedDial2.Button>
        </SpeedDial2>
      </div>
    </div>;
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ro=["Positions"];export{o as Positions,Ro as __namedExportsOrder,Co as default};
