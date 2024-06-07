import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'year',
      type: 'number',
      title: 'Year of your project',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of your project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of your project',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Image of the project',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description of the project',
      initialValue: '',
    }),
    defineField({
      name: 'liveDemoLink',
      type: 'string',
      title: 'Live Demo Link of your project',
      initialValue: '',
    }),
    defineField({
      name: 'githubLink',
      type: 'string',
      title: 'Github Link of your project',
      initialValue: '',
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies used',
      of: [{ type: 'string' }],
    }),
  ],
})
