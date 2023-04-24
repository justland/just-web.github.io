# Define Gizmo

There is a bug in TypeScript that prevent `define()` to infer the optional param for `gizmo function`.

This bug impacts 4.8.0 to 5.0.x.
It is fixed in 5.1.0.

To support 4.8.0 to 5.0.x, you need to explicitly define the gizmo function type.

```ts
const gizmo: YourGizmo = define((options?: YourGizmoOptions) => {
  // ...
})
```
