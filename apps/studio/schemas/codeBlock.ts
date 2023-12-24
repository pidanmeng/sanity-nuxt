import {defineType} from 'sanity'

export default defineType({
  type: 'code',
  name: 'codeBlock',
  title: 'Code with all options',
  options: {
    language: 'typescript',
    languageAlternatives: [
      {title: 'TS', value: 'typescript'},
      {title: 'HTML', value: 'html'},
      {title: 'CSS', value: 'css'},
    ],
    withFilename: true,
  },
})
