export function readmeTemplate(answers: any): string {
  return ` 
# ${answers.title}

## Descripción
${answers.description}

## Índice
- [Instalación](#instalación)
- [Uso](#uso)
- [Licencia](#licencia)
- [Contribución](#contribución)
- [Pruebas](#pruebas)
- [Preguntas y contacto](#preguntas-y-contacto)

## Instalación
${answers.installation}

## Uso
${answers.usage}

## Licencia
Este proyecto está licenciado bajo la licencia ${answers.license}.

## Contribución
${answers.contributing}

## Pruebas
${answers.tests}

## Preguntas y contacto
${answers.questions}
  `
}
