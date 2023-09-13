import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  delete: {
    [lang.EN]: 'Delete',
    [lang.ES]: 'Eliminar',
    [lang.PT]: 'Excluir'
  },
  description: {
    [lang.EN]: 'Edit deck, go back to studying',
    [lang.ES]: 'Editar mazo, volver al estudio',
    [lang.PT]: 'Editar baralho, voltar a estudar'
  },
  save: {
    [lang.EN]: 'Save',
    [lang.ES]: 'Guardar',
    [lang.PT]: 'Salvar'
  },
  title: {
    [lang.EN]: 'Edit deck',
    [lang.ES]: 'Editar mazo',
    [lang.PT]: 'Editar baralho'
  }
}

export default i18n(dictionary)
