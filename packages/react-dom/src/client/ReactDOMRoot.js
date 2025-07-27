import {
  createContainer,
  updateContainer,
} from 'react-reconciler/ReactFiberReconciler'

function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot
}

ReactDOMRoot.prototype.render = function (element) {
  const root = this._internalRoot
  updateContainer(element, root)
}

export function createRoot(container) {
  const root = createContainer(container)

  return new ReactDOMRoot(root)
}
