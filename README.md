# Kasparro – Frontend Engineering Assignment (V1)

This repository contains a V1 frontend implementation for **Kasparro**, an
AI-native SEO & Brand Intelligence platform designed for the AI-first search era
(ChatGPT, Gemini, Perplexity, etc.).

The goal of this assignment was **not visual polish**, but to demonstrate:

- System-level frontend thinking
- Clear component boundaries
- Structured data modeling
- UX clarity for a complex AI product

---


### 1. Public Website
Routes:
- `/` — Home (product narrative)
- `/platform` — Product overview
- `/about` — Mission & philosophy

Purpose:
Explain **what Kasparro does**, **why AI-SEO is different**, and **how the system works**
in under 10 seconds.

---

### 2. Product Dashboard (Mocked)
Routes:
- `/app/dashboard` — Brand snapshot
- `/app/audit` — Core audit experience
- `/app/architecture` — System overview

Purpose:
Demonstrate how an authenticated Kasparro user would interact with
AI-SEO audit data in a structured, scalable UI.

---

## 🏗️ Architecture Overview

The frontend is structured around **systems, not pages**.

```txt
src/
├── app/               # Route definitions (Next.js App Router)
├── components/        # Feature + layout components
├── data/              # Structured mocked JSON data
├── lib/               # Types & state management
