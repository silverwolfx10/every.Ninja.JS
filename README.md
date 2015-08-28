### $every

Testa se todos os elementos do array passou no teste da funcao fornecida a funcao curry

```javascript
this.Ninja(['$equal', '$every'], function ($equal, $every) {
  $every([2, 2, 3], $equal(2));
});
```
