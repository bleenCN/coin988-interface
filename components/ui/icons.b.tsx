import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React, { memo } from 'react'

type IconProps = React.ComponentProps<'svg'>
type ImgProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>

export const SearchIcon = memo(function SearchIcon(props: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5Z"
        stroke="#9EA1AC"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
})

export const ThalaIcon = memo(function ThalaIcon(
  props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
) {
  return (
    <Image
      src={'/images/icon-thala.png'}
      alt={'Thala'}
      width={24}
      height={24}
      {...props}
    />
  )
})
export const CoinbaseIcon = memo(function CoinbaseIcon(
  props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
) {
  return (
    <Image
      src={'/images/icon-coinbase.png'}
      alt={'Coinbase'}
      width={24}
      height={24}
      {...props}
    />
  )
})
export const BlogIcon = memo(function BlogIcon(props: ImgProps) {
  return (
    <Image src={'/images/icon-blog.png'} alt={'blog'} width={24} height={24} {...props} />
  )
})

export const ArrowIcon = memo(function ArrowIcon(
  props: IconProps & { shape?: '>' | '→' },
) {
  const shape = props.shape ?? '>'
  if (shape === '>')
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8 4L16 12L8 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (shape === '→')
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M4 12H20M20 12L13 5M20 12L13 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    )
})

export const LayeredIcon = memo(function LayeredIcon(props: ImgProps) {
  return (
    <Image src={'/images/icon-layered.png'} alt={''} width={74} height={74} {...props} />
  )
})

export const PieIcon = memo(function LayeredIcon(props: ImgProps) {
  return <Image src={'/images/icon-pie.png'} alt={''} width={74} height={74} {...props} />
})

export const WebSiteIcon = memo(function WebSiteIcon(
  props: IconProps & { theme?: 'light' | 'dark' },
) {
  const theme = props.theme ?? 'dark'
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'transition-all',
        {
          'fill-black/40 hover:fill-black/80': theme === 'dark',
          'dark:fill-white/20 hover:dark:fill-white/40': theme === 'dark',
          'fill-white/40 hover:fill-white/80': theme === 'light',
        },
        props.className,
      )}
    >
      <path d="M10.7924 2.54073C6.02814 2.05209 2.05209 6.02814 2.54073 10.7924C2.88044 14.1024 5.89761 17.1196 9.20764 17.4593C13.9719 17.9479 17.9479 13.9719 17.4593 9.20764C17.1196 5.89761 14.1024 2.88044 10.7924 2.54073ZM15.3575 6.42809L16.072 7.85719C15.1148 7.67646 14.8504 7.68482 13.9284 7.85719C13.3828 8.0011 13.0983 8.39101 12.9645 8.65875C12.8959 8.79597 12.8624 8.94826 12.8691 9.10221C12.8875 9.55738 12.8691 10.774 12.1428 11.0718C11.8215 11.204 11.4283 10.7522 11.4283 10.3573C11.4785 8.10653 12.4959 7.66642 12.7737 7.5225C13.0649 7.37189 13.9284 6.7862 13.9284 6.7862C14.5542 6.46825 15.3575 6.42809 15.3575 6.42809ZM6.7862 4.64255L7.233 5.08935C7.35181 5.20816 7.32169 5.40897 7.17276 5.48762C6.75942 5.70852 6.02814 6.27748 5.42069 7.70323C5.38053 7.79527 5.29016 7.85551 5.18976 7.85551H4.28611C4.28611 7.85719 4.34635 5.97124 6.7862 4.64255ZM6.71257 15.5014L5.11445 14.1626C5.29518 13.8012 5.67505 13.5585 6.11014 13.5719C6.66739 13.5903 7.12256 14.0421 7.14431 14.5994C7.15602 14.9692 6.98366 15.2989 6.71257 15.5014ZM9.99916 16.4284C9.19425 16.4284 8.42782 16.2745 7.71829 16.0051C8.02453 15.6336 8.21362 15.1617 8.21362 14.6429C8.21362 13.4598 7.25476 12.4993 6.06997 12.4993C5.42404 12.4993 4.8467 12.7888 4.45345 13.2406C3.89453 12.2884 3.56989 11.1823 3.56989 9.99916C3.56989 9.73142 3.59164 9.46869 3.62344 9.20764L6.03651 8.96666C6.25572 8.94491 6.43478 8.78426 6.47829 8.56839C6.78285 7.07905 8.12159 6.13524 8.95662 5.68007C9.26788 5.51105 9.30971 5.08098 9.03862 4.8534L7.9191 3.9213C8.57174 3.69707 9.26955 3.57156 9.99916 3.57156C11.7529 3.57156 13.341 4.27607 14.5007 5.41399L12.9444 6.03651C12.9444 6.03651 9.28461 7.91576 10.3573 10.7137C10.7171 11.5538 11.363 12.0692 11.9504 12.0692C13.2473 12.0692 13.9903 10.9145 13.9284 9.28461C14.171 9.03527 14.2463 9.04531 14.6429 8.92817C15.4746 8.78928 15.7474 9.04029 16.3849 9.26788C16.4117 9.50885 16.4301 9.7515 16.4301 9.99916C16.4284 13.5502 13.5502 16.4284 9.99916 16.4284Z" />
    </svg>
  )
})

export const TwitterIcon = memo(function TwitterIcon(
  props: IconProps & { theme?: 'light' | 'dark' | 'blue' },
) {
  const theme = props.theme ?? 'dark'
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'transition-all',
        {
          'fill-black/40 hover:fill-black/80': theme === 'dark',
          'dark:fill-white/20 hover:dark:fill-white/40': theme === 'dark',
          'fill-white/40 hover:fill-white/80': theme === 'light',
          'fill-dark-foreground-active': theme === 'blue',
        },
        props.className,
      )}
    >
      <path d="M15.9728 6.89133C15.9728 6.75454 15.9701 6.61931 15.9639 6.485C16.5654 6.04932 17.0872 5.50396 17.5 4.8799C16.9395 5.12507 16.343 5.2837 15.7322 5.35005C16.3679 4.96972 16.8555 4.36147 17.0859 3.63155C16.4906 3.98248 15.8321 4.23339 15.132 4.36412C14.5711 3.74363 13.7705 3.3484 12.8856 3.33374C11.1859 3.30641 9.80813 4.70263 9.80813 6.45185C9.80813 6.70048 9.83488 6.94161 9.88797 7.17444C7.32855 7.01435 5.06056 5.71929 3.54347 3.76698C3.27876 4.23473 3.12687 4.78138 3.12687 5.36721C3.12687 6.47523 3.67021 7.46002 4.49573 8.04114C3.99035 8.01893 3.51693 7.87013 3.10169 7.62617V7.66687C3.10169 9.21547 4.16282 10.513 5.57084 10.8157C5.31272 10.8871 5.04046 10.9242 4.76045 10.9229C4.56591 10.9219 4.37199 10.9012 4.18184 10.8613C4.57307 12.1303 5.71014 13.0575 7.05631 13.0884C6.00275 13.9376 4.67557 14.4448 3.23465 14.4413C2.98621 14.4413 2.7407 14.4251 2.5 14.3957C3.86247 15.3042 5.47977 15.8333 7.21835 15.8333C12.8778 15.8347 15.9728 11.0461 15.9728 6.89133H15.9728Z" />
    </svg>
  )
})

export const DiscordIcon = memo(function DiscordIcon(
  props: IconProps & { theme?: 'light' | 'dark' | 'blue' },
) {
  const theme = props.theme ?? 'dark'
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'transition-all',
        {
          'fill-black/40 hover:fill-black/80': theme === 'dark',
          'dark:fill-white/20 hover:dark:fill-white/40': theme === 'dark',
          'fill-white/40 hover:fill-white/80': theme === 'light',
          'fill-dark-foreground-active': theme === 'blue',
        },
        props.className,
      )}
    >
      <path d="M15.2177 5.15199C15.2135 5.14374 15.2066 5.13728 15.1982 5.13376C14.2256 4.67825 13.1993 4.35344 12.145 4.16745C12.1354 4.16564 12.1255 4.16695 12.1167 4.1712C12.1079 4.17546 12.1006 4.18244 12.0959 4.19115C11.9561 4.45008 11.8293 4.71605 11.7158 4.98803C10.5792 4.8119 9.42312 4.8119 8.28655 4.98803C8.17231 4.71535 8.04341 4.44932 7.90045 4.19115C7.89555 4.18263 7.88824 4.17581 7.87949 4.17158C7.87073 4.16735 7.86093 4.16591 7.85137 4.16745C6.79687 4.35305 5.7705 4.67789 4.79809 5.13378C4.78977 5.13739 4.78274 5.14354 4.77799 5.15139C2.83337 8.11593 2.30066 11.0076 2.56199 13.8634C2.56272 13.8704 2.56483 13.8772 2.56818 13.8833C2.57153 13.8895 2.57606 13.8949 2.5815 13.8992C3.71384 14.7551 4.98037 15.4084 6.32705 15.8312C6.33653 15.8341 6.34666 15.834 6.35607 15.8309C6.36548 15.8277 6.37372 15.8217 6.37968 15.8136C6.66892 15.4119 6.9252 14.9865 7.14593 14.5417C7.14896 14.5356 7.1507 14.5289 7.15101 14.5221C7.15133 14.5152 7.15022 14.5084 7.14777 14.502C7.14531 14.4957 7.14156 14.4899 7.13676 14.4851C7.13197 14.4803 7.12623 14.4767 7.11994 14.4743C6.71579 14.3164 6.32453 14.1262 5.94983 13.9052C5.94302 13.9011 5.93731 13.8954 5.93319 13.8885C5.92906 13.8816 5.92666 13.8738 5.9262 13.8658C5.92573 13.8578 5.92721 13.8497 5.93051 13.8424C5.93381 13.8351 5.93882 13.8287 5.94511 13.8238C6.02396 13.7637 6.10144 13.7017 6.17748 13.6379C6.18415 13.6323 6.19223 13.6287 6.20079 13.6276C6.20935 13.6264 6.21807 13.6277 6.22595 13.6313C8.68078 14.775 11.3385 14.775 13.7642 13.6313C13.7722 13.6274 13.781 13.626 13.7896 13.6271C13.7983 13.6281 13.8065 13.6317 13.8133 13.6374C13.8895 13.7015 13.9671 13.7636 14.0463 13.8238C14.0526 13.8286 14.0577 13.835 14.061 13.8423C14.0644 13.8496 14.0659 13.8576 14.0655 13.8656C14.0651 13.8737 14.0627 13.8815 14.0587 13.8884C14.0546 13.8953 14.0489 13.9011 14.0422 13.9052C13.6683 14.128 13.2767 14.3182 12.8715 14.4737C12.8652 14.4762 12.8595 14.4799 12.8547 14.4848C12.8499 14.4896 12.8462 14.4955 12.8438 14.5019C12.8414 14.5083 12.8404 14.5152 12.8407 14.522C12.8411 14.5289 12.8429 14.5356 12.846 14.5417C13.0704 14.984 13.3263 15.4089 13.6116 15.8129C13.6174 15.8212 13.6256 15.8274 13.6351 15.8307C13.6445 15.834 13.6547 15.8341 13.6643 15.8312C15.0134 15.4098 16.2821 14.7564 17.4159 13.8992C17.4214 13.8951 17.426 13.8898 17.4293 13.8838C17.4327 13.8777 17.4348 13.871 17.4354 13.864C17.7482 10.5624 16.9116 7.69442 15.2177 5.15199ZM7.51254 12.1245C6.77346 12.1245 6.16447 11.4321 6.16447 10.5818C6.16447 9.73151 6.76164 9.03908 7.51254 9.03908C8.2693 9.03908 8.87239 9.73752 8.86058 10.5818C8.86058 11.4321 8.26338 12.1245 7.51254 12.1245ZM12.4967 12.1245C11.7577 12.1245 11.1487 11.4321 11.1487 10.5818C11.1487 9.73151 11.7459 9.03908 12.4967 9.03908C13.2536 9.03908 13.8566 9.73752 13.8448 10.5818C13.8448 11.4321 13.2536 12.1245 12.4967 12.1245Z" />
    </svg>
  )
})

export const TwitterAuthIcon = memo(function TwitterAuthIcon(props: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.99023 1.58203C10.422 1.58203 10.8538 1.74676 11.1832 2.07617L12.7055 3.59857H14.8069C15.7388 3.59857 16.494 4.35393 16.494 5.28568V7.38705L17.9433 8.83635C18.6022 9.4952 18.6022 10.5634 17.9433 11.2223L16.494 12.6716V14.846C16.494 15.7778 15.7387 16.5331 14.8069 16.5331H12.6325L11.1832 17.9824C10.8538 18.3118 10.422 18.4766 9.99023 18.4766C9.5584 18.4766 9.1266 18.3118 8.79725 17.9824L7.34793 16.5331H5.2466C4.31488 16.5331 3.55949 15.7778 3.55949 14.846V12.7447L2.03715 11.2223C1.37824 10.5634 1.37824 9.49521 2.03715 8.83635L3.55947 7.31395V5.2857C3.55947 4.35396 4.31488 3.59859 5.24658 3.59859H7.2749L8.79723 2.07619C9.12662 1.74678 9.5584 1.58203 9.9902 1.58203H9.99023ZM13.1167 8.28549C12.8887 8.05742 12.5189 8.05742 12.2909 8.28549L9.5032 11.0731L8.30125 9.91242C8.07156 9.69061 7.70691 9.69471 7.48227 9.91994L7.47549 9.92684L7.47529 9.92703C7.25127 10.159 7.25771 10.5287 7.48973 10.7528L9.07367 12.2824C9.14782 12.3542 9.23975 12.405 9.34002 12.4295C9.54357 12.498 9.77738 12.4511 9.93955 12.2889L13.1169 9.11156C13.345 8.8835 13.345 8.51373 13.1169 8.28568L13.1167 8.28549Z"
        fill="#2E60FF"
      />
    </svg>
  )
})

export const EmailIcon = memo(function EmailIcon(
  props: IconProps & { theme?: 'blue' | 'dark' | 'light' },
) {
  const theme = props.theme || 'blue'
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.21046 5H19.7895C21.2593 5 22 5.68833 22 7.08833V16.9117C22 18.3 21.2593 19 19.7895 19H4.21046C2.74074 19 2 18.3 2 16.9117V7.08833C2 5.68833 2.74074 5 4.21046 5ZM11.9941 15.0333L19.9189 8.58167C20.2011 8.34833 20.4245 7.81167 20.0717 7.33333C19.7307 6.855 19.1076 6.84333 18.6961 7.135L11.9941 11.6383L5.30394 7.135C4.89242 6.84333 4.26925 6.855 3.92828 7.33333C3.57554 7.81167 3.79894 8.34833 4.08113 8.58167L11.9941 15.0333Z"
        className={clsx('transition-all', {
          'fill-black/40 hover:fill-black/80': theme === 'dark',
          'dark:fill-white/20 hover:dark:fill-white/40': theme === 'dark',
          'fill-white/40 hover:fill-white/80': theme === 'light',
          'fill-dark-foreground-active': theme === 'blue',
        })}
        fill="currentColor"
      />
    </svg>
  )
})
