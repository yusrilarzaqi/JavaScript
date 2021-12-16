# Closure

> Closure merupakan kombinasi antara function dan lingkungan leksikal (_lexical scope_) didalam function tersebut
> 
> - __MND__

> Closure adalah sebuah function ketika memiliki akses ke parent scopenya, meskipun parent scopnya sudah selesai dieksekusi
> 
> - __w3School__

> Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan.
>
> - __Code Fellow__

> Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasilnya dari function yang lain.
>
> - __Techsith__

## Lexical Scope

```javascript
function init() {
  let nama = 'Yusril'; // local variable
  function tampilNama() { // inner function (closure*)
    console.log(nama); // akses ke parent variable
  }
  tampilNama();
}

init();
```

## Kenapa menggunakan Closure?

- untuk membuat Function Factoies. __MND__
- Untuk membuat privite method. __MND__
