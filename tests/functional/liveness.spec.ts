import { test } from '@japa/runner'

test('Liveness probe test', async ({ client }) => {
  const response = await client.get('/liveness')

  response.assertStatus(200)
  response.assertBody({ status: 'ok' })
})
