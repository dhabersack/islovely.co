---
excerpt: 
title: Testing Angular-controllers using bindToController
---

In Angular [TODO], [`bindToController`](https://docs.angularjs.org/api/ng/service/$compile#-bindtocontroller-) was introduced to directives. It allows us to skip `$scope` when assigning attributes to directives.

```javascript
code here
```

The associated controller might look something like this:

```javascript
code here
```

Note that we do not have to mention the attributes that were put in the directive’s `scope` at all: these are already available to the controller, as `bindToController` puts them directly there for us:

```
code here
```

Because they are being bound to the controller during its initialization, we cannot add them after the fact. If we want to test the controller with a dedicated unit test that does not also cover the directive (otherwise it wouldn’t really be a unit test), we need a way to provide those values to the controller before its initialization.

We usually use a call such as this to initialize our controller as part of a unit test:

```
var controller = $controller('MyController', {});
```

The signature of the `$controller`-service is [`controllerName, dependencies`]. However, _there is a third parameter_ that is undocumented: [`TODO`]

```
var controllerFunction = $controller('MyController', {}, true);
var controller = controllerFunction();
```

TODO

```
var controllerFunction = $controller('MyController', {}, true);
var controller = controllerFunction();

console.log(controller.myProperty); // => undefined
```

To pass attributes to the `controller`, we can set them on a `controllerFunction.instance`:

```
var controllerFunction = $controller('MyController', {}, true);
controllerFunction.myProperty = 'hello';
controller = controllerFunction();

console.log(controller.myProperty); // => 'hello'
```

