// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import users from './users'
import agents from './agents'
import pricing from './pricing'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ users,agents,pricing ]),
})
