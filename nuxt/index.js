import path from "path";

const cssPath = "@happyjayxin/ubutton/dist/u-button.css";
export default function UButton() {
  this.options.css.push(cssPath);
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js")
  });
}
