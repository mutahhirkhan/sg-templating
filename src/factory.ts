import { ChildGeneration as ChildGenerationEvent } from "../generated/Factory/Factory"
import { ChildGeneration } from "../generated/schema"

export function handleChildGeneration(event: ChildGenerationEvent): void {
  let entity = new ChildGeneration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._parentAddress = event.params._parentAddress
  entity._childAddress = event.params._childAddress
  entity.childNumber = event.params.childNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
