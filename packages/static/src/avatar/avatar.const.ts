import styles from './styles/avatar.module.css'

export type AvatarSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | ''

export const AVATAR_SIZE_MAP = {
  '': '',
  lg: styles.large,
  md: styles.medium,
  sm: styles.small,
  xs: styles.extraSmall,
  xxs: styles.smallest,
}
