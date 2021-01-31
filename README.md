# use-ranges

> React hook to return a matching range (from a list of ranges) for a given value.

[![NPM](https://img.shields.io/npm/v/use-ranges.svg)](https://www.npmjs.com/package/use-ranges) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-ranges
```

## Usage

```tsx
import React, { useState } from 'react'

import { useRange } from 'use-range'

const myRanges = [
    {
        id: 'VERY_LOW',
        title: 'Very low',
        min: 0,
    },
    {
        id: 'LOW',
        title: 'Low',
        min: 20,
    },
    {
        id: 'MEDIUM',
        title: 'Medium',
        min: 40,
    },
    {
        id: 'HIGH',
        title: 'High',
        min: 60,
    },
    {
        id: 'VERY_HIGH',
        title: 'Very high',
        min: 80,
        max: 100,
    },
]

const Example = () => {
    const [value, setValue] = useState(0)
    const { range, rangeIndex, setValue } = useRange(myRanges)
    return (
        <div>
            <div>
                Value: <input value={value} onChange={(evt) => setValue(evt.target.value)} />
            </div>
            {range && <div>Current range is: {range.title}</div>}
        </div>
    )
}
```

## License

MIT © [samirdamle](https://github.com/samirdamle)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
