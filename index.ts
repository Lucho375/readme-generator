#!/usr/bin/env node
import inquirer from 'inquirer'
import { questions, readmeTemplate, writeReadme } from './src/index.js'
;(async () => {
  console.clear()
  const answers = await inquirer.prompt(questions)
  const readmeContent = readmeTemplate(answers)
  await writeReadme(readmeContent)
})().catch((err) => {
  console.log(err)
})
