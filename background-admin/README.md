# 游戏数据管理后台 (background-admin)

Vue 3 + Vite + Element Plus 后台，对 uniCloud 云数据库 6 个集合（heroes, enemies, summons, difficulties, rewards, levels）做增删改查。

## 前置条件

1. 已部署云函数 **adminApi**（位于 `unicloud/uniCloud-aliyun/cloudfunctions/adminApi/`），并在 uniCloud 控制台为该云函数开启 **HTTP 访问（URL 化）**。
2. 将得到的云函数访问地址配置到环境变量。

## 安装与运行

```bash
cd background-admin
npm install
```

配置云函数地址（二选一）：

- 在项目根目录创建 `.env.local`，内容：
  ```
  VITE_ADMIN_API_URL=https://你的云函数HTTP地址
  ```
- 或直接修改 `.env.development` / `.env.production` 中的 `VITE_ADMIN_API_URL`。

启动开发服务器：

```bash
npm run dev
```

构建生产包：

```bash
npm run build
```

## 云函数 adminApi 说明

- **入参**（POST JSON）：`{ collection, action: 'list'|'add'|'update'|'remove', id?, data? }`
- **集合名**：heroes | enemies | summons | difficulties | rewards | levels
- **返回**：`{ code: 0, msg, data? }`，失败时 `code !== 0`

部署 adminApi 后，在控制台找到该云函数的「URL 化」访问地址，填到上述 `VITE_ADMIN_API_URL` 即可。

## 若出现 404 (Not Found)

`POST .../http/adminApi 404` 表示当前请求的地址在云端不存在，常见原因：

1. **adminApi 尚未部署**  
   控制台「云函数/云对象」列表里需要能看到 **adminApi**（和 getGameData 一样）。若只有 getGameData，说明 adminApi 还没上传。
   - **用 HBuilderX**：在项目里找到 `unicloud/uniCloud-aliyun/cloudfunctions/adminApi`，右键该目录 → **上传部署**（或「上传并运行」）。部署成功后，在 uniCloud 控制台「函数/对象列表」中会出现 adminApi。
   - **用控制台**：若控制台没有「新建云函数」按钮，云函数需从 HBuilderX 或 CLI 上传；无法在网页上从零创建。

2. **URL 化未开启或路径不一致**  
   部署后需为 adminApi 开启「云函数 URL 化」：
   - 在控制台点击 **adminApi** 进入详情。
   - 找到「云函数URL化」或「HTTP 访问」。
   - 勾选启用，并设置 PATH，例如：`/http/adminApi`（具体以控制台显示为准）。
   - 保存后，把控制台给出的**完整访问地址**（如 `https://fc-mp-xxx.next.bspapp.com/http/adminApi`）填到 `VITE_ADMIN_API_URL`，且不要多写或少写路径。

3. **地址填错**  
   确保 `.env.development` 或 `.env.local` 里的 `VITE_ADMIN_API_URL` 与控制台里 adminApi 的「访问示例」一致（含 `https://` 和路径），重启 `npm run dev` 后再试。
