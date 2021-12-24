# Error Handling

## Error Handling : Promise

- `then()`
- `catch()`

```javascript
function cobaPromise() {
    return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
        setTimeout(() => {
            resolve("selesai");
        }, 3000);
    } else {
        reject("kelamaan");
    }  
    });
}
```

```javascript
const coba = coba Promise();
coba
  .then(coba => console.log(coba))
  .catch(e => console.log(e));
```

## Error Handling : Async Await

- `try`

- `catch()`



## Fetch()
