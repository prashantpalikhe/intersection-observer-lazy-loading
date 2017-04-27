# Intersection Observer

Intersection observer API is an experimental technology that allows us to asynchronously react to when an element intersects with an ancestor element or the viewport. 
  
This allows some interesting use-cases and the most obvious one is lazy loading of images. Instead of using jank-inducing scroll event listeners with layout querying, we can simply use intersection observe to be aware of when images appear in the viewport and then only load/display images.

Read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
 
`lazyloader.js` is a ES6 class that takes in a selector and lazy loads all the images matching that selector.

[DEMO](https://cdn.rawgit.com/prashantpalikhe/intersection-observer-lazy-loading/c7becb02/index.html)
