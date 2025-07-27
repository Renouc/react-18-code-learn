## createRoot

```js
// react-dom/client/ReactDOMRoot.js
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
```

```js
// react-reconciler/ReactFiberReconciler.js
import { createFiberRoot } from './ReactFiberRoot'

export function createContainer(containerInfo) {
  return createFiberRoot(containerInfo)
}

export function updateContainer(element, root) {
  console.log('updateContainer 🚀', element, root)
}
```

```js
// react-reconciler/ReactFiberRoot.js
import { createHostRootFiber } from './ReactFiber'
import { initialUpdateQueue } from './ReactFiberClassUpdateQueue'

function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo
}

export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo)
  const uninitializedFiber = createHostRootFiber()
  root.current = uninitializedFiber
  uninitializedFiber.stateNode = root

  initialUpdateQueue(uninitializedFiber)
  return root
}
```

```js
// react-reconciler/ReactFiber.js
import { HostRoot } from './ReactWorkTags'
import { NoFlags } from './ReactFiberFlags'

function FiberNode(tag, pendingProps, key) {
  this.tag = tag // 代表 fiber 节点的类型
  this.key = key
  this.type = null // 代表 fiber 节点对应虚拟 DOM 的类型

  this.return = null
  this.child = null
  this.sibling = null
  this.stateNode = null

  this.pendingProps = pendingProps
  this.memoizedProps = null
  this.memoizedState = null
  this.updateQueue = null
  this.flags = NoFlags
  this.subtreeFlags = NoFlags
  this.alternate = null
  this.index = 0
}

function createFiber(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key)
}

export function createHostRootFiber() {
  return createFiber(HostRoot, null, null)
}
```