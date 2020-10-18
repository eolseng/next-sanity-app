import {supportedLanguages} from "./supportedLanguages";

export default {
    name: 'localeRoomDescription',
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
}