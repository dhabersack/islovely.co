---
date: 2013-03-29
description: TODO
layout: post
title: Adding include_all? to Ruby arrays
---

do_this_and_do_that_and_another_thing

Ruby does not supply a convenient method to check if an array contains all
elements of another array, which can occasionally prove quite useful.

Such a method should return `true` if all elements of an array are present in
the current array, `false` otherwise.


### Writing unit tests

TODO


### First draft

We could write a class that takes two arrays and runs the test against those.

```ruby
class Array
  def include_all?(other)
    other.each { |n| return false unless self.include?(n) }
    true
  end
end
```

### Refactoring

While the tests pass, the explicit `return`-statements are not very sexy. There
is an even quicker way to find the answer by using Ruby's [`Array#-`](http://www.ruby-doc.org/core-2.0/Array.html#method-i-2D):

```ruby
class Array
  def include_all?(other)
    (other - self).empty?
  end
end
```


```ruby
require_relative '../array_include_all'

describe Array do
  describe '#include_all?(array)' do
    it 'is false if current array is empty' do
      [].include_all?([4, 8, 15]).should be_false
    end

    it 'is false if some elements do not exist in array' do
      [4, 8].include_all?([4, 8, 15]).should be_false
    end

    it 'is true if second array is empty' do
      [1, 2, 3].include_all?([]).should be_true
    end

    it 'is true if arrays are identical' do
      [1, 2, 3].include_all?([1, 2, 3]).should be_true
    end

    it 'is true if elements are not in same order' do
      [1, 2, 3].include_all?([3, 1, 2]).should be_true
    end

    it 'is true if all elements exist in array' do
      [1, 2, 3].include_all?([1, 2]).should be_true
    end
  end
end
```



All tests pass.
