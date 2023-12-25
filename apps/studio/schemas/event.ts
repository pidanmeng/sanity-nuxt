import {defineField, defineType} from 'sanity'
import {preview} from 'sanity-plugin-icon-picker'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'period',
      type: 'dateRange',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: [{type: 'tags'}],
        },
      ],
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'media.tag'}]
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      from: 'period.from',
      to: 'period.to',
      icon: 'tags',
    },
    prepare(selection) {
      const {from, to, icon} = selection
      console.log(`output->icon`, icon)
      let subtitle = ''
      if (from && to) {
        subtitle = `${new Date(from).toLocaleDateString()} - ${new Date(to).toLocaleDateString()}`
        if (from === to) {
          subtitle = `${new Date(from).toLocaleDateString()}`
        }
      }
      return {...selection, subtitle, media: preview(icon)}
    },
  },
})
