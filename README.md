# 💳 Sistema Bancário - Banco Comunitário
O desafio consiste em criar um **Sistema Bancário** simples utilizando **TypeScript**, com foco em modelagem orientada a objetos. A proposta é implementar um banco comunitário fictício que permita o gerenciamento de **clientes** e **contas bancárias**, além de realizar operações financeiras básicas.

## 🎯 Objetivo

Desenvolver classes e interfaces que representem os elementos centrais de um sistema bancário, como clientes, contas correntes e contas poupança. Implementar métodos para realizar operações como:

- Criar cliente
- Criar conta bancária (corrente ou poupança)
- Depositar
- Sacar
- Transferir
- Calcular juros da conta poupança

---

## 👤 Cliente

Cada cliente do banco deve possuir:

- Nome completo
- Número de identificação (ID)
- Endereço
- Número de telefone
- Renda salarial

---

## 💰 Tipos de Conta

### Conta Corrente

- Disponível para clientes com **renda a partir de R$ 500,00**
- Possui limite de cheque especial de **R$ 100,00**
- Permite as operações de:
  - Depósito
  - Saque
  - Transferência
  - Verificar saldo

### Conta Poupança

- Pode ser criada por qualquer cliente
- Possui atributo `taxaJuros`
- Implementa o método `calcularTaxa()` para aplicar juros ao saldo
- Permite as operações de:
  - Depósito
  - Saque
  - Transferência
  - Verificar saldo
  - Cálculo de juros

---

## 🔧 Requisitos Técnicos

- Utilização de **TypeScript**
- Uso de **orientação a objetos** com:
  - Classes
  - Interfaces (`ICliente`, `IConta`, etc.)
- Separação adequada de responsabilidades
- Código limpo e organizado

---

## 🧪 Testes

Você deve realizar testes para verificar:

- Criação de clientes e contas
- Validação de renda para conta corrente
- validação da rentabilidade da taxa na conta poupança 
- Operações de depósito, saque e transferência entre contas
