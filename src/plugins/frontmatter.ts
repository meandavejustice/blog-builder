import { matter } from 'vfile-matter'

/**
 * Plugin to parse YAML frontmatter and expose it at `file.data.matter`.
 *
 * @type {import('unified').Plugin<Array<void>>}
 */
export default function handleYamlMatter() {
  return function (_: any, file: any) {
    matter(file)
  }
}
