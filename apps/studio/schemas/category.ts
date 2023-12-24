import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
