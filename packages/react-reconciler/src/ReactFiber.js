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
