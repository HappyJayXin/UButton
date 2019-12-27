# U-Button

Vue button with simple style.

## Demo

[U-Button](https://happyjayxin.github.io/UButton/)

## Install

NPM

```
npm install @happyjayxin/ubutton
```

CDN

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/@happyjayxin/ubutton@0.3.0/dist/u-button.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@happyjayxin/ubutton"></script>
```

Global install as a vue plugin

```js
import Vue from 'vue';
import UButton from '@happyjayxin/ubutton';
import '@happyjayxin/ubutton/dist/u-button.css';
Vue.use(UButton);
```

```js
// You can set default global options.
Vue.use(UButton, {
  theme: '#f00', // Button theme
  outline: true,
  round: '1'
});
```

Or import UButton as a local component

```html
<script type="text/ecmascript-6">
  import { UButton } from "@happyjayxin/ubutton";
  import "@happyjayxin/ubutton/dist/u-button.css";

  export default {
    components: { UButton }
  };
</script>
```

## Usage

```html
<template>
  <div id="app">
    <u-button @click="sayHello" theme="#079992">Hello u-button</u-button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      sayHello() {
        alert('Hello');
      }
    }
  };
</script>
```

[See more Example Code](https://github.com/HappyJayXin/UButton/blob/master/src/App.vue)

## Using with Nuxt

Create the file `~/plugins/vue-u-button`

```js
import Vue from 'vue';
import UButton from '@happyjayxin/ubutton';
import '@happyjayxin/ubutton/dist/u-button.css';
Vue.use(UButton);
```

Then add the file path inside the plugins key of our `nuxt.config.js`

```js
export default {
  plugins: ['~/plugins/vue-u-button']
};
```

## Attributes

Props

| 屬性     | 說明                                         | 類型    | 預設   |
| -------- | -------------------------------------------- | ------- | ------ |
| disabled | 禁用按鈕。                                   | Boolean | false  |
| theme    | 客製按鈕主題色，參數必須為 Hex 十六進位。    | String  | #000   |
| href     | 跳頁選項。                                   | String  | -      |
| target   | 打開連結方式，和 HTML a 標籤的 target 相同。 | String  | \_self |
| loading  | 按鈕進入載入中狀態。                         | Boolean | false  |
| round    | 按鈕邊框圓角，可選值為 `0`、`1`、`2`、`3`。  | String  | '0'    |
| outline  | 改變按鈕樣式為外框按鈕                       | Boolean | false  |

Event

| 名稱  | 說明     | 回傳 |
| ----- | -------- | ---- |
| click | 點擊事件 | -    |

## License

This software is licensed under the [MIT](https://github.com/HappyJayXin/UButton/blob/master/LICENSE).
