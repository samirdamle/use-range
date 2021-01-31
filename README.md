# use-ranges

> React hook to return a matching range (from a list of ranges) for a given value.

[![NPM](https://img.shields.io/npm/v/use-ranges.svg)](https://www.npmjs.com/package/use-ranges) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-ranges
```

## Usage

```tsx
import * as React from 'react'

import { useRange } from 'use-ranges'

const Example = () => {
    const example = useRange()
    return <div>{example}</div>
}
```

## License

MIT © [samirdamle](https://github.com/samirdamle)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
