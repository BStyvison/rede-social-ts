import {ImgHTMLAttributes} from 'react'
import styles from './Avatar.module.css'

interface avatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

export const Avatar = ({hasBorder = true, ...props}: avatarProps) => {
  return (
    <div>
      <img
          className={hasBorder ? styles.avatarWithBorder : styles.avatar}
          {...props}
        />
    </div>
  )
}
