'use client'
import type { FieldMap } from '@payloadcms/ui/providers/ComponentMap'

import { RenderFields } from '@payloadcms/ui/forms/RenderFields'
import { useComponentMap } from '@payloadcms/ui/providers/ComponentMap'
import React from 'react'

export const CreateFirstUserFields: React.FC<{
  createFirstUserFieldMap: FieldMap
  userSlug: string
}> = ({ createFirstUserFieldMap, userSlug }) => {
  const { getFieldMap } = useComponentMap()

  const fieldMap = getFieldMap({ collectionSlug: userSlug })

  return (
    <RenderFields
      fieldMap={[...(fieldMap || []), ...(createFirstUserFieldMap || [])]}
      operation="create"
      path=""
      readOnly={false}
      schemaPath={userSlug}
    />
  )
}
