import { attributeChanged, define } from "directive";
import { on } from "standard/echo/interfaces";
import {
  echoConnectedCallback,
  echoDisconnectedCallback,
} from "standard/echo/lifeCycle";
import { setOn } from "./interfaces";

/**
 * A classe `EchoSource` representa um elemento personalizado que interage com o Echo Event Bus para gerenciar eventos
 * com base nas alterações de atributos.
 *
 * @description
 * `EchoSource` é um Custom Element que observa mudanças em atributos específicos, como `on`, e chama callbacks de
 * conexão e desconexão conforme o protocolo Echo. Ele é usado para permitir comunicação reativa entre componentes
 * baseados em eventos, como o exemplo do formulário com campos que reagem a resultados de APIs externas.
 *
 * @example
 * <mc-text-field name="cidade" label="Cidade" readonly>
 *   <mc-echo-source on="viaCEP/success:setter/value|prop=localidade"></mc-echo-source>
 * </mc-text-field>
 */
@define("mc-echo-source")
class EchoSource extends HTMLElement {
  /**
   * Callback chamado quando um atributo observado é alterado.
   *
   * @param {string} name - O nome do atributo que foi alterado.
   * @param {string|null} oldValue - O valor anterior do atributo antes da alteração.
   * @param {string|null} newValue - O novo valor do atributo após a alteração.
   * @returns {Promise<EchoSource>} Uma Promise que resolve a instância do componente após a execução dos callbacks.
   *
   * @description
   * O `attributeChangedCallback` é disparado quando o valor do atributo `on` muda. O componente então
   * executa callbacks de conexão e desconexão no elemento pai, que são definidos pelo Echo Event Bus.
   * Isso garante que o componente se ajuste dinamicamente a eventos conforme o estado muda no sistema.
   *
   * @example
   * <mc-echo-source on="viaCEP/success:setter/value|prop=logradouro"></mc-echo-source>
   */
  @attributeChanged(on)
  async [setOn](newValue, oldValue) {
    // Garante que o elemento pai esteja definido no DOM
    await customElements.whenDefined(this.parentElement.localName);

    // Desconecta o evento anterior se houver um callback de desconexão definido no pai
    this.parentElement?.[echoDisconnectedCallback]?.(oldValue);

    // Conecta o novo evento se houver um callback de conexão definido no pai
    this.parentElement?.[echoConnectedCallback]?.(newValue);

    return this;
  }
}

export default EchoSource;
