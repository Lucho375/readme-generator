export const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Título del proyecto:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Descripción del proyecto:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Instrucciones de instalación:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Instrucciones de uso:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Seleccione una licencia:',
    choices: ['MIT', 'GPLv3', 'Apache-2.0', 'BSD-3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Guía de contribución:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Instrucciones para ejecutar pruebas:'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Preguntas y contacto:'
  }
]
