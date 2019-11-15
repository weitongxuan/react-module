## Set npm registry & token

npm config set //npm.pkg.github.com/:\_authToken < your token >
npm config set //npm.pkg.github.com/processand-technologies/:\_authToken < your token >
npm config set @processand-technologies:registry https://npm.pkg.github.com/processand-technologies/

## Usage

```tsx
import * as React from "react";

import MyComponent from "new-package";

class Example extends React.Component {
  render() {
    return <MyComponent />;
  }
}
```

## License

MIT © [](https://github.com/)
