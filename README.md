# Tempest

A minimal templating library.


## Installation

```
npm i git+https://github.com/oelin/tempest
```


## Usage
```js
import tempest from "tempest"

tempest.render(
  "The {{fox}} jumped over the {{dog}}.",
  {
    fox: "quick brown fox",
    dog: "lazy dog",
  },
)

// "The quick brown fox jumped over the lazy dog."
```
