import {supportedLanguages} from "./supportedLanguages";

export default {
    name: 'room',
    title: 'Room',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().error('Must provide a title')
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required().error('Must provide a slug. Please click "Generate".')
        },
        {
            name: 'coverImage',
            title: 'Cover image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                    options: {
                        isHighlighted: false
                    }
                }
            ],
            validation: Rule => Rule.required().error('Must provide a cover image')
        },
        {
            name: 'images',
            title: 'images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {hotspot: true},
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                            options: {
                                isHighlighted: true // <-- make this field easily accessible
                            }
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                            options: {
                                isHighlighted: true // <-- make this field easily accessible
                            }
                        },
                        {
                            name: 'attribution',
                            type: 'string',
                            title: 'Attribution',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Room', value: 'room'},
                    {title: 'Suite', value: 'suite'}
                ],
                layout: 'radio',
                direction: 'horizontal'
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: supportedLanguages.map(lang => (
                {
                    title: lang.title,
                    name: lang.id,
                    type: 'text',
                    rows: 5,
                    validation: Rule => [
                        Rule.required().min(50).error('A description must be over 50 characters long.'),
                        Rule.min(200).max(350).warning('A description should be between 200 and 350 characters long'),
                    ]
                }
            )),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'object',
            fields: supportedLanguages.map(lang => (
                {
                    title: lang.title,
                    name: lang.id,
                    type: 'array',
                    of: [{type: 'block'}]
                }
            )),
        }
    ]
}