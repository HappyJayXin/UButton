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
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@happyjayxin/ubutton@0.2.2/dist/u-button.css">
<script src="https://cdn.jsdelivr.net/npm/@happyjayxin/ubutton"></script>
```


## Usage

Import Global

```javascript 
import Vue from 'vue';
import UButton from "@happyjayxin/ubutton";
import "@happyjayxin/ubutton/dist/u-button.css";
Vue.use(UButton);
```

Import in page

```javascript
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
Add `@happyjayxin/ubutton/nuxt` to `modules` in nuxt.config.js.
```javascript
module.exports = {
  modules: [
    '@happyjayxin/ubutton/nuxt'
  ]
};
```

## Attributes
Props

屬性|說明|類型|預設
---|---|---|---
disabled|禁用按鈕|Boolean|false

Event

名稱|說明|回傳
---|---|---
click|點擊事件|