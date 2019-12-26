# U-Button

Simple Button.

## Demo
[U-Button](https://happyjayxin.github.io/UButton/)

## Install
NPM
```
npm install @happyjayxin/ubutton
```
CDN
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@happyjayxin/ubutton@0.2.4/dist/u-button.css">
<script src="https://cdn.jsdelivr.net/npm/@happyjayxin/ubutton"></script>
```


## Usage

Import Global

```js 
import Vue from 'vue';
import UButton from "@happyjayxin/ubutton";
import "@happyjayxin/ubutton/dist/u-button.css";
Vue.use(UButton);
```
```js
// Or you can set default global options.
Vue.use(UButton, {
  theme: '#f00' // Button theme
});
```

Import in page

```html
<script type="text/ecmascript-6">
  import { UButton } from "@happyjayxin/ubutton";
  import "@happyjayxin/ubutton/dist/u-button.css";

  export default {
    components: { UButton }
  };
</script>
```

Template

```html
<template>
  <div id="app">
    <u-button @click="sayHello">Hello u-button</u-button>
  </div>
</template>
```

## Using with Nuxt
Create the file `~/plugins/vue-u-button`
```js 
import Vue from 'vue';
import UButton from "@happyjayxin/ubutton";
import "@happyjayxin/ubutton/dist/u-button.css";
Vue.use(UButton);
```
Then add the file path inside the plugins key of our `nuxt.config.js`
```js
export default {
  plugins: ['~/plugins/vue-u-button']
}
```

## Attributes
Props

屬性|說明|類型|預設
---|---|---|---
disabled|禁用按鈕|Boolean|false
theme|客製按鈕主題色|String|#000
href|跳頁選項|String|-
target|打開連結方式，和 HTML a 標籤的 target 相同|String|_self
loading|按鈕進入載入中狀態|Boolean|false

Event

名稱|說明|回傳
---|---|---
click|點擊事件|-
