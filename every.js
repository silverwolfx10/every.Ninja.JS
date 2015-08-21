/**
 * $every
 * 
 * Testa se todos os elementos do array passou no teste da funcao
 * fornecida a funcao curry
 * 
 * @module $every
 * @author Cleber de Moraes Gonçalves <cleber.programmer>
 * @example
 * 
 *        $every([1, 2, 3], $equal(2));
 * 
 */
Ninja.module('$every', ['$curry'], function ($curry) {
  
  /**
   * Testa se todos os elementos do array passou no teste da funcao fornecida
   * 
   * @public
   * @method every
   * @param {Array} a Array de valores que seram testado
   * @param {Function} b Funcao que testa os valores
   * @return {Boolean} Resultado dos teste dos valores fornecidos
   * @example
   * 
   *        $every([1, 2, 3], $equal(2));
   * 
   */
  function every(a, b) {
    return a.every(b);
  }
  
  /**
   * Revelacao do servico $every, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(every);
  
});
