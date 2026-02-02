# Lumina Models 管理后台（快速、安全）

本项目是静态页面，为了让管理员可以快速新增模特资料，新增了一个轻量级 Node.js 后台，
使用本地 JSON 文件存储数据，并通过环境变量口令进行保护。

## 启动方式

```bash
npm install
ADMIN_KEY="你的强口令" npm start
```

然后访问：

```
http://localhost:3000/admin
```

## 安全建议

- **必须设置 `ADMIN_KEY`**，否则后台写入会被拒绝。
- 使用反向代理或防火墙限制后台访问 IP。
- 通过 HTTPS 访问后台地址。

## 数据文件

后台写入的数据保存在：

```
data/models.json
```

后续如果需要把数据展示到首页，可以再扩展前端从该 JSON 或 API 读取。
