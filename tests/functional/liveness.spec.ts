import { test } from '@japa/runner'

test('Liveness probe test', async ({ client }) => {
  const response = await client.get('health')

  response.assertStatus(200)
  response.assertBodyContains({ healthy: true })
})
