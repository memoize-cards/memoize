import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

/**
 * Instância do cliente Supabase configurada com a URL e a chave da API.
 *
 * @constant {SupabaseClient} supabase - O cliente Supabase, usado para interagir com os serviços de banco de dados e autenticação do Supabase.
 *
 * @description
 * Esta instância é criada usando a função `createClient` da biblioteca Supabase, que recebe a URL e a chave da API, ambas configuradas através de variáveis de ambiente.
 * O `supabase` pode ser usado para realizar operações como consultas, inserções e autenticação no banco de dados.
 *
 * As variáveis de ambiente `SUPABASE_URL` e `SUPABASE_KEY` devem ser configuradas corretamente para que o cliente funcione conforme esperado.
 *
 * @example
 * // Exemplo de como usar o cliente Supabase para buscar dados
 * const { data, error } = await supabase
 *   .from('table_name')
 *   .select('*');
 *
 * if (error) {
 *   console.error('Erro ao buscar dados:', error);
 * } else {
 *   console.log('Dados recebidos:', data);
 * }
 */
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
