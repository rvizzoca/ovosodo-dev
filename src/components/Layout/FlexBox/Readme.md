The `<FlexBox>` component is tought to ease the effort of developing complex layouts through the [flexbox CSS API](https://www.w3schools.com/css/css3_flexbox.asp).

### Column

```js
const side = 20
;<>
  <FlexBox
    dial={1}
    style={{
      height: 200,
      backgroundColor: '#F0F0F0',
      border: '1px solid #F2B9B9',
    }}
  >
    <div
      style={{
        backgroundColor: 'red',
        minHeight: side,
        minWidth: side,
      }}
    />
    <div
      style={{
        backgroundColor: 'green',
        minHeight: side,
        minWidth: side,
      }}
    />
    <div
      style={{
        backgroundColor: 'blue',
        minHeight: side,
        minWidth: side,
      }}
    />
  </FlexBox>
</>
```

### Row

```js
const side = 20
;<>
  <FlexBox
    dial={1}
    row
    style={{
      height: 200,
      backgroundColor: '#F0F0F0',
      border: '1px solid #F2B9B9',
    }}
  >
    <div
      style={{
        backgroundColor: 'red',
        minHeight: side,
        minWidth: side,
      }}
    />
    <div
      style={{
        backgroundColor: 'green',
        minHeight: side,
        minWidth: side,
      }}
    />
    <div
      style={{
        backgroundColor: 'blue',
        minHeight: side,
        minWidth: side,
      }}
    />
  </FlexBox>
</>
```

### Row with wrapping

```js
const side = 110
;<>
  <FlexBox
    dial={1}
    row
    wrap
    style={{
      width: 300,
      height: 300,
      backgroundColor: '#F0F0F0',
      border: '1px solid #F2B9B9',
    }}
  >
    <div
      style={{
        backgroundColor: 'red',
        minHeight: side,
        minWidth: side,
      }}
    />
    <div
      style={{
        backgroundColor: 'green',
        minHeight: side,
        minWidth: side,
      }}
    />
    <div
      style={{
        backgroundColor: 'blue',
        minHeight: side,
        minWidth: side,
      }}
    />
  </FlexBox>
</>
```
