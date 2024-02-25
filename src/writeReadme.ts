import fs from 'fs/promises'
export async function writeReadme(content: string): Promise<void> {
  try {
    await fs.writeFile('README.md', content)
    console.log('README.md generado')
  } catch (error) {
    console.log('Error al generar README.md :', error)
  }
}
