import blockContent from './blockContent'
import post from './post'
import author from './author'
import category from './category'
import codeBlock from './codeBlock'
import tags from './tags'
import event from './event'

const customFields = [codeBlock, blockContent]

export const schemaTypes = [event, post, author, category, tags, ...customFields]
