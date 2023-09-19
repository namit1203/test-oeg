<template>
    <div>
      <header class="header-container">
        <nav class="container mx-auto p-4 flex justify-between items-center">
          <div class="flex gap-10">
            <NuxtLink to="/" class="font-bold text-white">UNDERGROUND ESPORT</NuxtLink>
            <NuxtLink to="/" class="text-white">Home</NuxtLink>
            <NuxtLink to="/managements" class="text-white">Team Management</NuxtLink>
            <NuxtLink to="/tournament" class="text-white">Tournaments</NuxtLink>
            
          
          </div>
          <div class="flex gap-10">
            <button class="custom-button contained gradient text-white rounded-md">Create</button>
            <button class="notification-button object-cover w-8 h-9 pl-2 pr-2 bg-black-3 mr-3 hover:bg-black-1 rounded-full">
              <Icon class="noti-icon" name="material-symbols:notifications-outline-sharp" />
            </button>
            <button class="user-button ant-btn ant-btn-primary custom-button contained black ant-dropdown-trigger rounded-full h-9 pl-2 pr-2 border-none bg-black-3 hover:bg-black-1">
              <Icon class="user-icon" name="material-symbols:account-circle-full" />
              <span style="color: white;">Username</span>
            </button>
          </div>
        </nav>
      </header>
  
      <!-- Output the content -->
      <div>
        <slot />
      </div>

      <footer class="ant-layout-footer footer_widgets bg-black-4 pb-0 pl-0 pr-0 z-10">
        <div class="items-center w-full justify-center flex flex-col">
          <img class="logo" src="https://beta.ugesports.xyz/assets/logo.98d9fc9d.svg" alt="logo">
          <p class="uppercase font-semibold">Underground Esports</p>
          <div class="flex flex-row justify-between mt-6 items-center">
            <button type="button" class="ant-btn ant-btn-primary ant-btn-icon-only custom-button contained black flex justify-center rounded-full items-center p-2 w-fit h-fit border-none bg-black-4 hover:bg-black-3 mr-2 last:mb-0"><img src="https://api.iconify.design/skill-icons:instagram.svg"></button>
            <button type="button" class="ant-btn ant-btn-primary ant-btn-icon-only custom-button contained black flex justify-center rounded-full items-center p-2 w-fit h-fit border-none bg-black-4 hover:bg-black-3 mr-2 last:mb-0"><img src="https://api.iconify.design/logos:facebook.svg"></button>
            <button type="button" class="ant-btn ant-btn-primary ant-btn-icon-only custom-button contained black flex justify-center rounded-full items-center p-2 w-fit h-fit border-none bg-black-4 hover:bg-black-3 mr-2 last:mb-0">
              <a href=https://twitter.com/UGEsportsxyz><img src="https://api.iconify.design/devicon:twitter.svg"></a>
            </button>
          </div>
          <div class="flex flex-row justify-between mt-10 items-center w-fit">
            <a aria-current="page" class="text-neutral-10 mr-4 hover:text-neutral-40 bg-transparent active" href="/">Về chúng tôi</a>
            <a aria-current="page" class="text-neutral-10 mr-4 hover:text-neutral-40 bg-transparent active" href="/">Liên hệ</a>
            <a aria-current="page" class="text-neutral-10 mr-4 hover:text-neutral-40 bg-transparent active" href="/">Chính sách bảo mật</a>
            <a aria-current="page" class="text-neutral-10 mr-4 hover:text-neutral-40 bg-transparent active" href="/">Thỏa thuận người dùng</a>
          </div>
          <div class="w-full bg-black-5 flex justify-center mt-11 pt-2 pb-2 text-xs">
            <p>© 2023 UGE. Đã đăng ký bản quyền.</p>
          </div>
        </div>

      </footer>
    </div>
  </template>
  
  <style>

  .logo{
    margin-top: 20px;
  }
  .justify-center {
    justify-content: center;
}
.items-center {
    align-items: center;
}
.flex-col {
    flex-direction: column;
}
.w-full {
    width: 100%;
}
.flex {
    display: flex;
}
.ant-layout, .ant-layout * {
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6, p, input, a, span, li, div {
    font-family: Inter;
}
*, :before, :after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
}
*, :before, :after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
}
*, *:before, *:after {
    box-sizing: border-box;
}
div {
    display: block;
}
.bg-black-4 {
    --tw-bg-opacity: 1;
    background-color: rgb(22 26 34 / var(--tw-bg-opacity));
}
.ant-layout-footer {
  background-color: #2E2E2E; 
  color: white; 
}
#root {
    height: 100%;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    --tw-bg-opacity: 1;
    background-color: rgb(16 19 25 / var(--tw-bg-opacity));
    overflow-x: hidden;
}
body {
    margin: 0;
    line-height: inherit;
}
body {
    --tw-bg-opacity: 1;
    background-color: rgb(16 19 25 / var(--tw-bg-opacity));
}
body {
    margin: 0;
    color: #000000d9;
    font-size: 14px;
    font-family: Helvetica Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji", Symbol,"Noto Color Emoji";
    font-variant: tabular-nums;
    line-height: 1.5715;
    background-color: #fff;
    font-feature-settings: "tnum";
}
html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    font-family: ui-sans-serif,system-ui,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji" Symbol,"Noto Color Emoji";
    font-feature-settings: normal;
    font-variation-settings: normal;
}
html {
    --antd-wave-shadow-color: #1890ff;
    --scroll-bar: 0;
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
}
::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
}
::-webkit-scrollbar-corner {
    display: none;
}
::-webkit-scrollbar-thumb {
    --tw-bg-opacity: 1;
    background-color: rgb(56 66 87 / var(--tw-bg-opacity));
    border-radius: 0.375rem;
}
::-webkit-scrollbar-track {
    border-radius: 0.375rem;
}
::selection {
    color: #fff;
    background: #1890ff;
}


  .header-container {
    width: 100%;
    height: 63px;
    background-color: #2E2E2E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; 
  }
  
  .header-container a {
    text-decoration: none;
  }
  
  .router-link-exact-active {
    color: transparent;
    position: relative;
    padding-left: 0.75rem;
    padding-right: 0;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(to bottom right,var(--tw-gradient-stops));
    --tw-gradient-from: #FF80B5 var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(255 128 181 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: #885FFF var(--tw-gradient-to-position);
    font-weight: 800!important;
  }
  
  /* Custom Button Styles */
  .custom-button.contained.gradient {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-gradient-from: #FF006B var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(255 0 107 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: #885FFF var(--tw-gradient-to-position);
  }
  
  .custom-button.contained {
    border-style: none;
    width: 80px;
    height: 32px;
    padding: 4px 15px;

  }
  
  button,
  html [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance: button;
  }
  
  .bg-black-3 {
    --tw-bg-opacity: 1;
    background-color: rgb(32 38 50 / var(--tw-bg-opacity));
  }
  
  .border-none {
    border-style: none;
  }
  
  .rounded-md {
    border-radius: 0.375rem;
  }
  
  .mr-3 {
    margin-right: 0.75rem;
  }
  
  button,
  [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }
  
  .custom-button {
    background-color: transparent;
    border-radius: 0.375rem;
    align-items: center;
    display: inline-flex;
    justify-content: center;
  }
  
  .ant-layout,
  .ant-layout * {
    box-sizing: border-box;
  }
  
  .ant-btn-primary {
    color: #fff;
    border-color: #1890ff;
    background: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 2px #0000000b;
  }
  
  .ant-btn,
  .ant-btn:active,
  .ant-btn:focus {
    outline: 0;
  }

  
  button,
  [role=button] {
    cursor: pointer;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

    .notification-button { 
      background-color: rgb(32 38 50 / var(--tw-bg-opacity));

  }
  .noti-icon{
    color: white;
  }
  
  .user-button{
    background-color: rgb(32 38 50 / var(--tw-bg-opacity));
  }

  .user-icon{
    color: white;
  }

  .rounded-full {
    border-radius: 9999px;
}

.custom-button.contained.black {
    --tw-bg-opacity: 1;
    background-color: rgb(32 38 50 / var(--tw-bg-opacity));
}
.custom-button.contained {
    border-style: none;
}
button, html [type=button], [type=reset], [type=submit] {
    -webkit-appearance: button;
}
.pr-2 {
    padding-right: 0.5rem;
}

.pl-2 {
    padding-left: 0.5rem;
}
  </style>
  