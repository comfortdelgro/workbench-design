---
title: React Badges component
components: Badges
---

# Badge

<p class="description">Badge can be used to highlight important bits of information such as labels, notifications, data trends & status.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Badge} from '@comfortdelgro/react-compass'
```

or

```js
import Badge from '@comfortdelgro/react-compass/badge'
```

## Example

### Basic

{{"demo": "BadgeBasic.tsx"}}

### Default icon

{{"demo": "BadgeIcon.tsx"}}

### Custom styling

You can style React Compass's components with the css prop.<br>
With css prop, you can basically do anything that css can do.
{{"demo": "BadgeCustom.tsx"}}

## Props

| Name    | Type                                         | Default | Description                                                                                                                       |
| :------ | :------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| color   | `info` \| `success` \| `warning` \| `danger` | info    | These colors will determine the color of background of the badges.                                                                |
| label   | `String `                                    | —       | Lable of the badges.                                                                                                              |
| variant | `primary` \| `secondary` \| `outline`        | primary | Variants will determine the color of the badges' label, border and the darkness of its background .                               |
| icon    | `ReactNode`\|`false`\| `true`                | false   | When false, no icon is shown in the badge. When true, the default icons are shown. And you can pass in custom icons to this prop. |
| css     | `CSS`                                        | —       | The system prop that allows defining system overrides as well as additional CSS styles.                                           |