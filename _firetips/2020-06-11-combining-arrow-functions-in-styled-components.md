---
title: "Combining arrow functions in styled-components"
tags: ["JavaScript", "styled-components"]
---
Instead of using many arrow functions to extract the theme in your styled-components, you can group them and do them all in one block.

```js
const Button = styled.button`
  box-shadow: ${({ theme }) => theme.boxShadows.medium};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin: 0;
`;

const Button = styled.button`
  ${({ theme }) => `
    box-shadow: ${theme.boxShadows.medium};
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeights.semibold};
  `}
  margin: 0;
`;
```
