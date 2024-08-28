import type { CollectionConfig } from 'payload'

import {
  RelationshipFeature,
  defaultEditorFeatures,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { lexicalRelationshipFieldsSlug } from '../../slugs.js'

export const LexicalRelationshipsFields: CollectionConfig = {
  slug: lexicalRelationshipFieldsSlug,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: [
          ...defaultEditorFeatures,
          RelationshipFeature({
            enabledCollections: ['array-fields'],
          }),
        ],
      }),
    },
    {
      name: 'richText2',
      type: 'richText',
      editor: lexicalEditor({
        features: [...defaultEditorFeatures, RelationshipFeature()],
      }),
    },
  ],
}