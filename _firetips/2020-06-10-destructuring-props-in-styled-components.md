---
title: "Destructuring props in styled-components"
tags: ["JavaScript", "styled-components", "ES6", "destructuring"]
---
Find yourself writing `props.` over and over in your styled-components? Destructure them to reduce the noise.

```js
const Post = styled.article`
  background: ${props =>
    props.isFeatured ? props.theme.yellow : props.theme.white
  };
`;

const Post = styled.article`
  background: ${({ isFeatured, theme }) =>
    isFeatured ? theme.yellow : theme.white
  };
`;
```
