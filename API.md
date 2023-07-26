# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsToEventbridge <a name="SqsToEventbridge" id="cdk-sqs-to-eventbridge.SqsToEventbridge"></a>

#### Initializers <a name="Initializers" id="cdk-sqs-to-eventbridge.SqsToEventbridge.Initializer"></a>

```typescript
import { SqsToEventbridge } from 'cdk-sqs-to-eventbridge'

new SqsToEventbridge(scope: Construct, id: string, props: EventbridgeToSqsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sqs-to-eventbridge.SqsToEventbridge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-sqs-to-eventbridge.SqsToEventbridge.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-sqs-to-eventbridge.SqsToEventbridge.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-sqs-to-eventbridge.EventbridgeToSqsProps">EventbridgeToSqsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-sqs-to-eventbridge.SqsToEventbridge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-sqs-to-eventbridge.SqsToEventbridge.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-sqs-to-eventbridge.SqsToEventbridge.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-sqs-to-eventbridge.EventbridgeToSqsProps">EventbridgeToSqsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sqs-to-eventbridge.SqsToEventbridge.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-sqs-to-eventbridge.SqsToEventbridge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sqs-to-eventbridge.SqsToEventbridge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-sqs-to-eventbridge.SqsToEventbridge.isConstruct"></a>

```typescript
import { SqsToEventbridge } from 'cdk-sqs-to-eventbridge'

SqsToEventbridge.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-sqs-to-eventbridge.SqsToEventbridge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sqs-to-eventbridge.SqsToEventbridge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-sqs-to-eventbridge.SqsToEventbridge.property.eventSourceMappingId">eventSourceMappingId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-sqs-to-eventbridge.SqsToEventbridge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eventSourceMappingId`<sup>Required</sup> <a name="eventSourceMappingId" id="cdk-sqs-to-eventbridge.SqsToEventbridge.property.eventSourceMappingId"></a>

```typescript
public readonly eventSourceMappingId: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### EventbridgeToSqsProps <a name="EventbridgeToSqsProps" id="cdk-sqs-to-eventbridge.EventbridgeToSqsProps"></a>

#### Initializer <a name="Initializer" id="cdk-sqs-to-eventbridge.EventbridgeToSqsProps.Initializer"></a>

```typescript
import { EventbridgeToSqsProps } from 'cdk-sqs-to-eventbridge'

const eventbridgeToSqsProps: EventbridgeToSqsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sqs-to-eventbridge.EventbridgeToSqsProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.EventBus</code> | *No description.* |
| <code><a href="#cdk-sqs-to-eventbridge.EventbridgeToSqsProps.property.sqsQueue">sqsQueue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |
| <code><a href="#cdk-sqs-to-eventbridge.EventbridgeToSqsProps.property.logRetention">logRetention</a></code> | <code>number</code> | *No description.* |

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="cdk-sqs-to-eventbridge.EventbridgeToSqsProps.property.eventBus"></a>

```typescript
public readonly eventBus: EventBus;
```

- *Type:* aws-cdk-lib.aws_events.EventBus

---

##### `sqsQueue`<sup>Required</sup> <a name="sqsQueue" id="cdk-sqs-to-eventbridge.EventbridgeToSqsProps.property.sqsQueue"></a>

```typescript
public readonly sqsQueue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-sqs-to-eventbridge.EventbridgeToSqsProps.property.logRetention"></a>

```typescript
public readonly logRetention: number;
```

- *Type:* number

---


