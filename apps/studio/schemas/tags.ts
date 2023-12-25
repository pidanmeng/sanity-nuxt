import {defineField, defineType} from 'sanity'
import {preview} from 'sanity-plugin-icon-picker'

export default defineType({
  name: 'tags',
  title: 'Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
      validation: (Rule) => Rule.required(),
      options: {
        providers: ['f7', 'fa', 'mdi', 'sa', 'hi', 'fi', 'si'],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      icon: 'icon',
    },
    prepare(select) {
      return {
        ...select,
        media: preview(select.icon),
      }
    },
  },
})
