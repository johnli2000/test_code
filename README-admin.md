# Lumina Models 管理后台（Supabase + React + Vercel）

本项目的后台将迁移到 **Supabase** 作为数据存储与认证层，前端使用 **React** 构建，
并通过 **Vercel** 部署发布。这样可以获得托管数据库、鉴权、自动化部署与可扩展的 API 能力。

## 技术选型

- **后端：Supabase**（Postgres + Auth + Storage）
- **前端：React**（用于构建管理后台界面）
- **部署：Vercel**（用于持续集成与前端发布）

## 基本流程

1. 在 Supabase 创建项目并初始化数据表（如 `models`）。
2. 在 React 管理后台中使用 Supabase SDK 进行数据读取与写入。
3. 将 React 项目托管到 Vercel，并配置 Supabase 的环境变量。

## 环境变量示例

在 Vercel 或本地 `.env` 中配置：

```
VITE_SUPABASE_URL=你的_supabase_url
VITE_SUPABASE_ANON_KEY=你的_supabase_anon_key
```

## 安全建议

- 在 Supabase 中启用 **Row Level Security** 并配置合适的访问策略。
- 管理员写入操作建议使用服务端函数或受限 API Key。
- 通过 Vercel 的环境变量与部署保护确保配置安全。

## 数据说明

模特资料将存储在 Supabase 的 `models` 数据表中，前端可直接通过 SDK 查询或结合 API 统一管理。
