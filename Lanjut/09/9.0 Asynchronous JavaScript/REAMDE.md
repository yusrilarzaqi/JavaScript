# Asynchronous JavaScript

- callback
- promise
- ajax
- async & await

> Bahaha pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser.

> Is a single-threaded, non-blocking, Asynchronous, and concurrent language.

## Thread

Urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain.

```javascript
console.log('satu');
setTimeout(() => {
  prosesYangKompleks();
}, 0);
console.log('tiga');
```

---

```javascript
console.log('satu');
setTimeout(() => {
  console.log('dua');
}, 5000);
console.log('tiga');
```

