<img src="https://i.ibb.co/Ld6Q4pM/ckd.png">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![Downloads](https://img.shields.io/npm/dt/ckd-css.svg?style=for-the-badge&colorA=CD4A4A&colorB=B03737)](https://npmcharts.com/compare/ckd-css?minimal=true)
&nbsp;
[![Code Quality](https://img.shields.io/badge/code%20quality-A-43DC6E.svg?style=for-the-badge&colorA=000000&colorB=2CBD55)](https://www.codacy.com/app/astorino-design/ckdcss?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=equinusocio/ckdcss&amp;utm_campaign=Badge_Grade)

<br>

---

<br>

## Why?

> It’s likely that you started your day with a micro-interaction. By turning off the alarm on your mobile phone, you engaged with a user interface in a single moment.

> You will continue to engage throughout the day in these moments with your digital devices. Each one is a micro-interaction. Each one is probably so small you don’t think about it. And each one works because of that simple fact.

> As a designer, recognizing the invisibility of micro-interactions is just as important as designing them. You have to create something that feels human and accomplishes a task, making the life of a user easier. You also have to focus on a design that can work in a variety of environments and does not need any instruction or explanation.

Source: [The Next Web](http://thenextweb.com/dd/2015/08/17/why-micro-interactions-are-the-secret-to-great-design/)

## Installation

### As dependency

You can install **ckd-css** as node dependency by using [Npm](https://www.npmjs.com/package/ckd-css) or [Yarn](https://yarnpkg.com/).

```bash
npm install ckd-css --save
```

Then import the desired animation inside your component:

```js
import 'ckd-css/dist/pulse.css';
```

### From source

If you are using PostCSS, you can also import animations from the `src/lib/animations` folder, but you need a specific [plugins configuration](https://github.com/equinusocio/ckdcss/blob/develop/config/postcss.config.js).

### From CDN

You can link the animation you want from CDN

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/ckd-css/dist/pulse.css">
```

We also provide the full collection (all animations) in a single file, but we strongly recommend to link only the css you need.

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/ckd-css/dist/ckd.css">
```

## Usage

To activate the animation add the `data-ckd` attribute to your radio/checkbox html element.

```html
<input type="checkbox" data-ckd="splash" />
```

## Browser support

<img width="24px" alt="Google Chrome" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/chrome/chrome_48x48.png">&nbsp;<img width="24px" alt="Firefox" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/firefox/firefox_48x48.png">&nbsp;<img width="24px" alt="Safari" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/safari/safari_48x48.png" title="💩">&nbsp;<img width="24px" alt="Microsoft Edge" src="https://cdn.rawgit.com/alrra/browser-logos/2109c114/src/edge/edge_48x48.png" title="💩">
