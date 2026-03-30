# Specification-Driven Development (SDD) - Aleatório da Pobreza

O **Specification-Driven Development (SDD)** é uma abordagem onde o desenvolvimento é guiado por uma especificação técnica detalhada que serve como a "fonte da verdade" antes mesmo da escrita de qualquer código funcional.

## 1. O Conceito Aplicado ao Projeto
Para o **Aleatório da Pobreza**, o SDD significa que não apenas "desenhamos a tela", mas definimos o comportamento dos dados, as regras de negócio e as interfaces de comunicação (APIs/Contratos) primeiro.

### Vantagens para este projeto:
- **Consistência Visual e de Dados**: A interface (React) e o Banco de Dados (Supabase) falam a mesma língua.
- **Testabilidade**: Podemos testar se o código cumpre a especificação.
- **Independência**: O Frontend pode ser desenvolvido simulando os dados definidos no contrato, enquanto o Backend (SQL/RLS) é configurado.

---

## 2. Documentando as Especificações

Antes de codar, documentamos em três camadas:

### A. Modelo de Domínio (Entidades)
Define o que é um "Produto" no sistema.
- **Campos**: ID, Nome, Frase de Efeito, Preço, Imagem, Status (Ativo/Rascunho), Visualizações, Votos Úteis, Votos Inúteis.

### B. Contratos de Interface (TypeScript)
Transformamos o domínio em tipos que o Frontend usará.

```typescript
export interface Product {
  id: string;
  name: string;
  phrase: string;
  price: number;
  imageUrl: string;
  status: 'active' | 'draft';
  stats: {
    views: number;
    useful: number;
    useless: number;
  };
}
```

### C. Regras de Negócio
- Um usuário pode votar apenas uma vez por produto (baseado em Session/IP ou Auth).
- Produtos em rascunho (`draft`) não aparecem no carrossel aleatório.
- O ranking é calculado pela razão: `Votos Úteis / (Votos Úteis + Votos Inúteis)`.

---

## 3. De Especificações para Contratos e Bancos

### Transformação em SQL (Supabase)
A especificação do modelo de domínio dita diretamente o `CREATE TABLE`:

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'draft'))
  -- ... outros campos mapeados da especificação
);
```

### Transformação em Componentes (Props)
Os componentes React recebem as interfaces definidas:

```tsx
interface ProductCardProps {
  product: Product; // Usando o contrato definido na etapa 2B
}
```

---

## 4. Exemplo Prático de Fluxo: Votação de Utilidade

### Fluxo de Funcionalidade: "Marcar como Útil"

1.  **Ação do Usuário**: Clica no botão "ÚTIL" (Polegar para cima) no `ProductCard`.
2.  **Trigger de Interface**: O componente chama uma função `handleVote(productId, 'useful')`.
3.  **Contrato de API**:
    - **Endpoint (RPC ou Supabase Call)**: `increment_vote(p_id, p_type)`
    - **Payload**: `{ p_id: '123', p_type: 'useful' }`
4.  **Lógica do Banco de Dados (PostgreSQL Function)**:
    - Verifica se o produto existe.
    - Incrementa a coluna `votes_useful`.
    - Retorna o novo contador para atualização da UI (Optimistic UI).
5.  **Feedback Visual**: O botão brilha em verde e o contador de votos no dashboard administrativo é atualizado em tempo real via Supabase Realtime.

---

## Próximos Passos Sugeridos
1.  **Validar o Esquema**: Rodar o `supabase_schema.sql`.
2.  **Implementar as Funções de Voto**: Criar as RPCs (Remote Procedure Calls) no banco baseadas no fluxo acima.
3.  **Conectar o Frontend**: Substituir os dados estáticos dos componentes pelas chamadas ao Supabase Client.
