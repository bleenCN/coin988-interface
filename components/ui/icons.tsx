type IconProps = React.ComponentProps<'svg'>

export function MoonIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.4245 13.045C19.7468 13.225 19.0487 13.3161 18.3475 13.316C16.2125 13.316 14.2075 12.486 12.7015 10.98C11.7125 9.98536 11.0016 8.74887 10.6394 7.39381C10.2773 6.03874 10.2766 4.61242 10.6375 3.25701C10.6826 3.08755 10.6823 2.90921 10.6367 2.73988C10.5911 2.57056 10.5017 2.41621 10.3776 2.29232C10.2535 2.16842 10.099 2.07934 9.92963 2.034C9.76023 1.98866 9.58189 1.98867 9.4125 2.03401C7.71566 2.4862 6.16756 3.37664 4.9235 4.61601C1.0255 8.51401 1.0255 14.859 4.9235 18.759C5.85003 19.6907 6.95214 20.4294 8.16604 20.9323C9.37994 21.4353 10.6815 21.6924 11.9955 21.689C13.3091 21.6927 14.6104 21.4357 15.824 20.9329C17.0376 20.4302 18.1394 19.6916 19.0655 18.76C20.3058 17.5157 21.1967 15.9668 21.6485 14.269C21.6934 14.0996 21.693 13.9214 21.6474 13.7522C21.6018 13.583 21.5126 13.4287 21.3887 13.3048C21.2648 13.1809 21.1105 13.0917 20.9413 13.0461C20.7721 13.0005 20.5939 13.0001 20.4245 13.045ZM17.6525 17.346C16.9115 18.0911 16.03 18.6818 15.0592 19.084C14.0883 19.4862 13.0474 19.6918 11.9965 19.689C10.9453 19.6916 9.904 19.4858 8.93283 19.0835C7.96166 18.6811 7.07988 18.0903 6.3385 17.345C3.2205 14.226 3.2205 9.15001 6.3385 6.03101C6.94101 5.42918 7.6366 4.92843 8.3985 4.54801C8.28698 5.98707 8.48745 7.43325 8.98623 8.7877C9.485 10.1422 10.2703 11.373 11.2885 12.396C12.3093 13.4174 13.5397 14.2049 14.8948 14.704C16.2498 15.2032 17.6971 15.4021 19.1365 15.287C18.754 16.0476 18.2531 16.7426 17.6525 17.346Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3V2M12 22V21M21 12H22M2 12H3M18.5 5.5L20 4M4 20L5.5 18.5M4 4L5.5 5.5M18.5 18.5L20 20"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="currentColor"
      />
      <path
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </svg>
  )
}

export function SlashIcon(props: IconProps) {
  return (
    <svg
      width="7"
      height="17"
      viewBox="0 0 7 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.2"
        d="M6.216 0.742L2.436 16.534H0.518L4.298 0.742H6.216Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3699 4.6368C13.3663 4.62938 13.3602 4.62356 13.3528 4.62039C12.4984 4.21044 11.5967 3.91811 10.6703 3.75072C10.6619 3.74908 10.6532 3.75026 10.6455 3.75409C10.6377 3.75792 10.6313 3.7642 10.6272 3.77205C10.5044 4.00508 10.393 4.24445 10.2933 4.48923C9.29471 4.33072 8.27899 4.33072 7.28043 4.48923C7.18006 4.24383 7.06682 4.0044 6.94121 3.77205C6.93691 3.76437 6.93049 3.75823 6.9228 3.75443C6.91511 3.75063 6.9065 3.74933 6.89809 3.75072C5.97164 3.91775 5.0699 4.21011 4.21557 4.62041C4.20826 4.62366 4.20209 4.62919 4.19791 4.63626C2.48942 7.30434 2.0214 9.90683 2.25099 12.4771C2.25164 12.4834 2.25349 12.4895 2.25643 12.495C2.25938 12.5006 2.26336 12.5054 2.26814 12.5093C3.26298 13.2796 4.37572 13.8676 5.55887 14.2481C5.5672 14.2507 5.5761 14.2506 5.58437 14.2478C5.59263 14.245 5.59987 14.2395 5.60511 14.2323C5.85922 13.8707 6.08439 13.4878 6.27832 13.0875C6.28098 13.082 6.2825 13.076 6.28278 13.0699C6.28306 13.0637 6.28209 13.0576 6.27993 13.0518C6.27777 13.0461 6.27448 13.0409 6.27026 13.0366C6.26605 13.0323 6.26101 13.029 6.25548 13.0269C5.90041 12.8848 5.55666 12.7136 5.22746 12.5147C5.22148 12.511 5.21645 12.5059 5.21283 12.4997C5.20921 12.4935 5.2071 12.4865 5.20669 12.4792C5.20628 12.472 5.20758 12.4647 5.21048 12.4582C5.21338 12.4516 5.21779 12.4458 5.22331 12.4414C5.29258 12.3873 5.36065 12.3316 5.42747 12.2742C5.43333 12.2691 5.44042 12.2659 5.44794 12.2648C5.45546 12.2638 5.46312 12.2649 5.47005 12.2682C7.62679 13.2975 9.96176 13.2975 12.093 12.2682C12.0999 12.2647 12.1077 12.2634 12.1153 12.2644C12.1229 12.2653 12.1301 12.2685 12.1361 12.2736C12.203 12.3313 12.2712 12.3873 12.3408 12.4414C12.3463 12.4458 12.3508 12.4515 12.3537 12.4581C12.3567 12.4646 12.358 12.4718 12.3577 12.4791C12.3573 12.4863 12.3552 12.4934 12.3517 12.4996C12.3481 12.5058 12.3431 12.511 12.3371 12.5147C12.0087 12.7152 11.6646 12.8864 11.3086 13.0263C11.3031 13.0285 11.2981 13.0319 11.2939 13.0363C11.2897 13.0407 11.2864 13.0459 11.2843 13.0517C11.2822 13.0575 11.2813 13.0637 11.2816 13.0698C11.2819 13.076 11.2835 13.082 11.2862 13.0875C11.4834 13.4856 11.7082 13.868 11.9589 14.2316C11.964 14.2391 11.9712 14.2447 11.9795 14.2476C11.9878 14.2506 11.9968 14.2507 12.0051 14.2481C13.1904 13.8688 14.3051 13.2808 15.3012 12.5093C15.306 12.5056 15.3101 12.5009 15.313 12.4954C15.316 12.4899 15.3178 12.4839 15.3183 12.4776C15.5932 9.50614 14.8582 6.92498 13.3699 4.6368ZM6.60041 10.9121C5.95107 10.9121 5.41604 10.2889 5.41604 9.52365C5.41604 8.75836 5.94069 8.13518 6.60041 8.13518C7.26528 8.13518 7.79514 8.76378 7.78476 9.5236C7.78476 10.2889 7.26008 10.9121 6.60041 10.9121ZM10.9794 10.9121C10.3301 10.9121 9.79503 10.2889 9.79503 9.52365C9.79503 8.75836 10.3197 8.13518 10.9794 8.13518C11.6443 8.13518 12.1741 8.76378 12.1638 9.5236C12.1638 10.2889 11.6443 10.9121 10.9794 10.9121Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.0334 6.20219C14.0334 6.07908 14.031 5.95737 14.0255 5.83649C14.554 5.44438 15.0125 4.95355 15.3751 4.3919C14.8826 4.61256 14.3586 4.75532 13.8219 4.81504C14.3805 4.47274 14.8089 3.92532 15.0113 3.26838C14.4883 3.58423 13.9098 3.81004 13.2947 3.9277C12.8018 3.36926 12.0985 3.01356 11.321 3.00035C9.82774 2.97576 8.61725 4.23236 8.61725 5.80666C8.61725 6.03042 8.64075 6.24744 8.68739 6.45699C6.43876 6.3129 4.44617 5.14735 3.1133 3.39027C2.88073 3.81125 2.74728 4.30323 2.74728 4.83048C2.74728 5.8277 3.22465 6.71401 3.94992 7.23702C3.50591 7.21703 3.08998 7.0831 2.72516 6.86354V6.90017C2.72516 8.29391 3.65744 9.46165 4.89448 9.73412C4.66771 9.79835 4.42851 9.83177 4.1825 9.83057C4.01158 9.82969 3.84121 9.81111 3.67415 9.77513C4.01787 10.9173 5.01687 11.7517 6.19958 11.7795C5.27395 12.5438 4.10792 13.0003 2.84198 12.9971C2.62371 12.9971 2.40801 12.9825 2.19653 12.9561C3.39356 13.7738 4.81447 14.25 6.34194 14.25C11.3142 14.2512 14.0334 9.94145 14.0334 6.20219H14.0334Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.7924 2.54073C6.02814 2.05209 2.05209 6.02814 2.54073 10.7924C2.88044 14.1024 5.89761 17.1196 9.20764 17.4593C13.9719 17.9479 17.9479 13.9719 17.4593 9.20764C17.1196 5.89761 14.1024 2.88044 10.7924 2.54073ZM15.3575 6.42809L16.072 7.85719C15.1148 7.67646 14.8504 7.68482 13.9284 7.85719C13.3828 8.0011 13.0983 8.39101 12.9645 8.65875C12.8959 8.79597 12.8624 8.94826 12.8691 9.10221C12.8875 9.55738 12.8691 10.774 12.1428 11.0718C11.8215 11.204 11.4283 10.7522 11.4283 10.3573C11.4785 8.10653 12.4959 7.66642 12.7737 7.5225C13.0649 7.37189 13.9284 6.7862 13.9284 6.7862C14.5542 6.46825 15.3575 6.42809 15.3575 6.42809ZM6.7862 4.64255L7.233 5.08935C7.35181 5.20816 7.32169 5.40897 7.17276 5.48762C6.75942 5.70852 6.02814 6.27748 5.42069 7.70323C5.38053 7.79527 5.29016 7.85551 5.18976 7.85551H4.28611C4.28611 7.85719 4.34635 5.97124 6.7862 4.64255ZM6.71257 15.5014L5.11445 14.1626C5.29518 13.8012 5.67505 13.5585 6.11014 13.5719C6.66739 13.5903 7.12256 14.0421 7.14431 14.5994C7.15602 14.9692 6.98366 15.2989 6.71257 15.5014ZM9.99916 16.4284C9.19425 16.4284 8.42782 16.2745 7.71829 16.0051C8.02453 15.6336 8.21362 15.1617 8.21362 14.6429C8.21362 13.4598 7.25476 12.4993 6.06997 12.4993C5.42404 12.4993 4.8467 12.7888 4.45345 13.2406C3.89453 12.2884 3.56989 11.1823 3.56989 9.99916C3.56989 9.73142 3.59164 9.46869 3.62344 9.20764L6.03651 8.96666C6.25572 8.94491 6.43478 8.78426 6.47829 8.56839C6.78285 7.07905 8.12159 6.13524 8.95662 5.68007C9.26788 5.51105 9.30971 5.08098 9.03862 4.8534L7.9191 3.9213C8.57174 3.69707 9.26955 3.57156 9.99916 3.57156C11.7529 3.57156 13.341 4.27607 14.5007 5.41399L12.9444 6.03651C12.9444 6.03651 9.28461 7.91576 10.3573 10.7137C10.7171 11.5538 11.363 12.0692 11.9504 12.0692C13.2473 12.0692 13.9903 10.9145 13.9284 9.28461C14.171 9.03527 14.2463 9.04531 14.6429 8.92817C15.4746 8.78928 15.7474 9.04029 16.3849 9.26788C16.4117 9.50885 16.4301 9.7515 16.4301 9.99916C16.4284 13.5502 13.5502 16.4284 9.99916 16.4284Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M417.28 795.733333 429.226667 615.253333 756.906667 320C771.413333 306.773333 753.92 300.373333 734.72 311.893333L330.24 567.466667 155.306667 512C117.76 501.333333 117.333333 475.306667 163.84 456.533333L845.226667 193.706667C876.373333 179.626667 906.24 201.386667 894.293333 249.173333L778.24 795.733333C770.133333 834.56 746.666667 843.946667 714.24 826.026667L537.6 695.466667 452.693333 777.813333C442.88 787.626667 434.773333 795.733333 417.28 795.733333Z"
      />
    </svg>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function BridgeIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.00008 4.16669V15.8334M15.0001 4.16669V15.8334M1.66675 12.5H18.3334M2.50008 6.66669C3.45654 6.32269 4.31467 5.7506 5.00008 5.00002C5.41138 5.98715 6.10567 6.83044 6.99546 7.42363C7.88524 8.01681 8.9307 8.33335 10.0001 8.33335M10.0001 8.33335C11.0695 8.33335 12.1149 8.01681 13.0047 7.42363C13.8945 6.83044 14.5888 5.98715 15.0001 5.00002C15.6855 5.7506 16.5436 6.32269 17.5001 6.66669M10.0001 8.33335V12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WalletIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.3126 10.9375C15.3126 11.1847 15.2392 11.4264 15.1019 11.632C14.9645 11.8375 14.7693 11.9977 14.5409 12.0924C14.3125 12.187 14.0612 12.2117 13.8187 12.1635C13.5762 12.1153 13.3535 11.9962 13.1787 11.8214C13.0039 11.6466 12.8848 11.4238 12.8366 11.1814C12.7883 10.9389 12.8131 10.6876 12.9077 10.4591C13.0023 10.2307 13.1625 10.0355 13.3681 9.89816C13.5737 9.76081 13.8153 9.6875 14.0626 9.6875C14.3941 9.6875 14.712 9.8192 14.9464 10.0536C15.1809 10.288 15.3126 10.606 15.3126 10.9375ZM18.4376 8.4375V14.6875C18.4376 15.3505 18.1742 15.9864 17.7053 16.4553C17.2365 16.9241 16.6006 17.1875 15.9376 17.1875H4.68756C4.02452 17.1875 3.38863 16.9241 2.91979 16.4553C2.45095 15.9864 2.18756 15.3505 2.18756 14.6875V5.38438C2.17794 5.05007 2.2355 4.71724 2.35683 4.40558C2.47815 4.09392 2.66077 3.80977 2.89389 3.56996C3.127 3.33015 3.40585 3.13954 3.71395 3.00944C4.02205 2.87933 4.35312 2.81236 4.68756 2.8125H15.0001C15.2487 2.8125 15.4872 2.91127 15.663 3.08709C15.8388 3.2629 15.9376 3.50136 15.9376 3.75C15.9376 3.99864 15.8388 4.2371 15.663 4.41291C15.4872 4.58873 15.2487 4.6875 15.0001 4.6875H4.68756C4.60374 4.68746 4.52078 4.70427 4.44359 4.73694C4.36641 4.76961 4.29659 4.81748 4.23828 4.87768C4.17997 4.93789 4.13436 5.0092 4.10417 5.08739C4.07399 5.16558 4.05983 5.24904 4.06256 5.33281V5.33906C4.07568 5.50455 4.15163 5.65874 4.27482 5.77001C4.398 5.88129 4.5591 5.94121 4.72506 5.9375H15.9376C16.6006 5.9375 17.2365 6.20089 17.7053 6.66973C18.1742 7.13857 18.4376 7.77446 18.4376 8.4375ZM16.5626 8.4375C16.5626 8.27174 16.4967 8.11277 16.3795 7.99556C16.2623 7.87835 16.1033 7.8125 15.9376 7.8125H4.72506C4.50154 7.81259 4.27892 7.78424 4.06256 7.72813V14.6875C4.06256 14.8533 4.12841 15.0122 4.24562 15.1294C4.36283 15.2467 4.5218 15.3125 4.68756 15.3125H15.9376C16.1033 15.3125 16.2623 15.2467 16.3795 15.1294C16.4967 15.0122 16.5626 14.8533 16.5626 14.6875V8.4375Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DefiIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.3751 8.33329C15.8709 8.33329 17.0834 7.12073 17.0834 5.62496C17.0834 4.12919 15.8709 2.91663 14.3751 2.91663C12.8793 2.91663 11.6667 4.12919 11.6667 5.62496C11.6667 7.12073 12.8793 8.33329 14.3751 8.33329Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14.3751 17.0833C15.8709 17.0833 17.0834 15.8707 17.0834 14.375C17.0834 12.8792 15.8709 11.6666 14.3751 11.6666C12.8793 11.6666 11.6667 12.8792 11.6667 14.375C11.6667 15.8707 12.8793 17.0833 14.3751 17.0833Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5.62508 8.33329C7.12085 8.33329 8.33341 7.12073 8.33341 5.62496C8.33341 4.12919 7.12085 2.91663 5.62508 2.91663C4.12931 2.91663 2.91675 4.12919 2.91675 5.62496C2.91675 7.12073 4.12931 8.33329 5.62508 8.33329Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5.62508 17.0833C7.12085 17.0833 8.33341 15.8707 8.33341 14.375C8.33341 12.8792 7.12085 11.6666 5.62508 11.6666C4.12931 11.6666 2.91675 12.8792 2.91675 14.375C2.91675 15.8707 4.12931 17.0833 5.62508 17.0833Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

export function ImageIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 5.5C2.5 4.70435 2.81607 3.94129 3.37868 3.37868C3.94129 2.81607 4.70435 2.5 5.5 2.5H14.5C15.2956 2.5 16.0587 2.81607 16.6213 3.37868C17.1839 3.94129 17.5 4.70435 17.5 5.5V14.5C17.5 15.2956 17.1839 16.0587 16.6213 16.6213C16.0587 17.1839 15.2956 17.5 14.5 17.5H5.5C4.70435 17.5 3.94129 17.1839 3.37868 16.6213C2.81607 16.0587 2.5 15.2956 2.5 14.5V5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49992 9.16671C8.42039 9.16671 9.16658 8.42052 9.16658 7.50004C9.16658 6.57957 8.42039 5.83337 7.49992 5.83337C6.57944 5.83337 5.83325 6.57957 5.83325 7.50004C5.83325 8.42052 6.57944 9.16671 7.49992 9.16671Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0501 10.4892L5.83325 17.5H14.6802C15.4281 17.5 16.1453 17.1955 16.6741 16.6534C17.2028 16.1113 17.4999 15.3761 17.4999 14.6094V14.51C17.4999 14.1617 17.3723 14.0279 17.1426 13.77L14.2041 10.4848C14.0671 10.3316 13.9005 10.2094 13.7149 10.1259C13.5293 10.0425 13.3288 9.99958 13.1261 10C12.9235 10.0004 12.7231 10.0441 12.5378 10.1284C12.3526 10.2126 12.1865 10.3355 12.0501 10.4892Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GameIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.50008 12.5L5.02675 14.9733C4.75147 15.2485 4.40078 15.4359 4.019 15.5118C3.63722 15.5878 3.2415 15.5488 2.88187 15.3998C2.52225 15.2509 2.21486 14.9986 1.99857 14.675C1.78228 14.3514 1.66681 13.9709 1.66675 13.5816V12.5L2.79758 6.84663C2.94862 6.09098 3.3568 5.411 3.95268 4.92239C4.54856 4.43377 5.29532 4.16671 6.06591 4.16663H13.9342C14.7048 4.16671 15.4516 4.43377 16.0475 4.92239C16.6434 5.411 17.0515 6.09098 17.2026 6.84663L18.3334 12.5V13.5808C18.3334 13.97 18.2179 14.3505 18.0016 14.6742C17.7853 14.9978 17.4779 15.2501 17.1183 15.399C16.7587 15.548 16.3629 15.5869 15.9812 15.511C15.5994 15.4351 15.2487 15.2477 14.9734 14.9725L12.5001 12.5H7.50008Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 4.16663L8.33333 5.83329H11.6667L12.5 4.16663"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ToolsIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.33663 5.11C2.50121 4.36965 2.91334 3.70756 3.50498 3.23304C4.09661 2.75852 4.83238 2.49994 5.5908 2.5H13.5758C14.3342 2.49994 15.07 2.75852 15.6616 3.23304C16.2533 3.70756 16.6654 4.36965 16.83 5.11L16.9525 5.66167C17.5875 8.51903 17.5875 11.481 16.9525 14.3383L16.83 14.89C16.6654 15.6303 16.2533 16.2924 15.6616 16.767C15.07 17.2415 14.3342 17.5001 13.5758 17.5H5.59163C4.83321 17.5001 4.09745 17.2415 3.50581 16.767C2.91417 16.2924 2.50204 15.6303 2.33747 14.89L2.21497 14.3383C1.58004 11.481 1.58004 8.51904 2.21497 5.66167L2.33747 5.11H2.33663Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66675 10.8334H6.94841C6.94841 11.6667 7.75925 13.3334 9.78591 13.3334C11.8134 13.3334 12.6242 11.6667 12.6242 10.8334H17.5001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
