---
title: Writing BEM-style CSS with Sass
---
BEM, “Block Element Modifier”, is a 


    .block {
      &.is-block-state {
      }

      &__element {
        &.is-element-state {
        }

        &--modifier {
          &.is-modifier-state {
          }
        }
      }
    }