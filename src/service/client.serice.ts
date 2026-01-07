export const ClientsService = {
  async getAll() {
    const res = await fetch('/api/clients')
    return res.json()
  },

  async create(name: string) {
    const res = await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })

    return res.json()
  }
}