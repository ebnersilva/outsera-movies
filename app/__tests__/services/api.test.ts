// api.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Importamos o axios para poder mockar suas funções
import axios from 'axios'

// Mockamos o módulo axios
vi.mock('axios', () => ({
    default: {
      create: vi.fn((config) => ({
        defaults: {
          baseURL: config.baseURL,
        },
      })),
    },
  }))

describe('API instance', () => {
    const baseURL = 'https://outsera-api.com/test'

    beforeEach(() => {
        // Limpa todos os mocks antes de cada teste
        vi.clearAllMocks()
        vi.resetModules()

        // Mock da variável de ambiente
        process.env.NEXT_PUBLIC_BASE_URL = baseURL
    })

    it('should create an axios instance with the correct baseURL', async () => {
        // Espiona a função axios.create
        const axiosCreateSpy = vi.spyOn(axios, 'create')

        // Reimporta o módulo api após mockar axios e definir a variável de ambiente
        const { api } = await import('./../../services/api')

        // Verifica se axios.create foi chamado com a configuração correta
        expect(axiosCreateSpy).toHaveBeenCalledWith({
            baseURL: baseURL
        })

        // Opcionalmente, verifica se api.defaults.baseURL está correto
        expect(api.defaults.baseURL).toBe(baseURL)
    })
})