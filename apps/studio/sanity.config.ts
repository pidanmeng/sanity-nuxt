import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {codeInput} from '@sanity/code-input'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {dateRangePlugin} from 'sanity-plugin-daterange-input'
import {table} from '@sanity/table'
import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdownInput} from './components/markdownInput'
export const projectId = 'exjxieex'
export const dataset = 'production'

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId,
  dataset,
  plugins: [
    markdownSchema({input: CustomMarkdownInput}),
    codeInput(),
    colorInput(),
    iconPicker(),
    table(),
    dateRangePlugin({}),
    deskTool(),
    media(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
