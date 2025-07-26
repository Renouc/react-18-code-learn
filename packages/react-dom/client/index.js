function ReactRoot(container) {
  this.container = container
}

ReactRoot.prototype.render = function (element) {
  console.log('render', this.container, element)
}

export function createRoot(container) {
  return new ReactRoot(container)
}
