---
title: BEM with Sass
---

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