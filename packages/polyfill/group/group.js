/**
 * Adiciona o método `group` ao protótipo de `Array`, permitindo agrupar elementos de um array
 * com base em uma função fornecida.
 *
 * @method Array#group
 * @param {Function} functionRef - Função usada para determinar a chave de agrupamento para cada item do array.
 * A função recebe um item do array e retorna uma chave que será usada para agrupar esse item.
 * @param {Object} [thisRef] - (Opcional) Valor a ser usado como `this` ao chamar `functionRef`. Caso não seja fornecido, `undefined` será usado.
 * @returns {Object} Um objeto onde as chaves são os valores retornados por `functionRef` e os valores são arrays contendo os itens correspondentes.
 *
 * @description
 * O método `group` percorre o array e agrupa seus elementos em um objeto com base no valor retornado por `functionRef`.
 * Cada chave do objeto representa um grupo, e os valores são arrays contendo os itens que pertencem a esse grupo.
 *
 * A função `functionRef` é executada para cada elemento do array e deve retornar uma chave que será usada para criar os grupos.
 * O valor de `this` dentro da função `functionRef` pode ser definido usando `thisRef`, que é opcional.
 *
 * @example
 * // Exemplo de uso básico:
 * const array = [1, 2, 3, 4, 5, 6];
 * const grouped = array.group(num => (num % 2 === 0 ? 'even' : 'odd'));
 * console.log(grouped);
 * // Resultado: { odd: [1, 3, 5], even: [2, 4, 6] }
 *
 * @example
 * // Exemplo com thisRef:
 * const array = ['apple', 'banana', 'cherry', 'date'];
 * const obj = {
 *   getFirstLetter: function(item) {
 *     return item.charAt(0);
 *   }
 * };
 * const grouped = array.group(obj.getFirstLetter, obj);
 * console.log(grouped);
 * // Resultado: { a: ['apple'], b: ['banana'], c: ['cherry'], d: ['date'] }
 */

Reflect.defineProperty(Array.prototype, "group", {
  value(functionRef, thisRef) {
    const evaluate = (reducer, object) => (
      (reducer[functionRef.call(thisRef, object)] ??= []).push(object), reducer
    );
    return this.reduce(evaluate, {});
  },
});
