const jwt = require('jsonwebtoken');
const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjNmM3ZTNkMDNmYzFiNWU4NzljNjMiLCJpYXQiOjE2ODA3ODAxOTF9.RvW2ey_3W7w9TESzNUURde0h_8QqF4-dC-6wmfd7zu8'; // вставьте сюда JWT, который вернул публичный сервер
const SECRET_KEY_DEV = 'some-secret-key'; // вставьте сюда секретный ключ для разработки из кода
try {
const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
console.log('\x1b[31m%s\x1b[0m', `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`);
} catch (err) {
if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
console.log(
'\x1b[32m%s\x1b[0m',
'Всё в порядке. Секретные ключи отличаются'
);
} else {
console.log(
'\x1b[33m%s\x1b[0m',
'Что-то не так',
err
);
}
}
