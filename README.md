# Dynamic component library

Simple angular 6 component for generating components dynamicly.

## Goal and motivation

There are some other components that does quite the same, however this is a test project and DRY using same services over and over again.
The pros for using this package is that is simple and have no dependency.

## Usage

1.  Import DCGeneratorModule into your application

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DynamicComponentLibModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

2.  Put your desired dynamic component in `entryComponents`

```typescript
@NgModule({
  ...
  entryComponents: [myCustomComponent]
  ...
})
```

3.  Use dc-generator component

```typescript
@Component({
  selector: 'app-root',
  template: `
    <dc-generator 
    [component]="componentToGenerate$ | async" 
    [inputs]="componentInputs$ | async"></dc-generator>
  `
})
export class AppComponent {
  componentToGenerate$ = timer(3000).pipe(map(() => TestComponent));
  componentInputs$ = timer(5000).pipe(map(() => ({ add: 'async text' })));
}
```

| input       | info                              |
| ----------- | --------------------------------- |
| `component` | Component to be generated         |
| `inputs`    | Object where keys are input names |
