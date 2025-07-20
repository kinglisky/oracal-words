# 部署指南

## 快速部署到 GitHub Pages

### 步骤 1: 准备代码

确保您的项目包含以下文件：
- `index.html` - 主页面
- `resources/` 文件夹 - 包含所有数据文件和字体
- `.github/workflows/deploy.yml` - GitHub Actions 配置

### 步骤 2: 推送到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 甲骨文字体映射展示"

# 添加远程仓库（替换为您的GitHub仓库URL）
git remote add origin https://github.com/[您的用户名]/oracal-words.git

# 推送到 GitHub
git push -u origin master
```

### 步骤 3: 启用 GitHub Pages

1. 进入您的 GitHub 仓库页面
2. 点击 `Settings` 标签
3. 在左侧菜单中找到 `Pages`
4. 在 `Source` 部分：
   - 选择 `Deploy from a branch`
   - 选择 `gh-pages` 分支（如果使用 GitHub Actions）
   - 或选择 `master` 分支和 `/ (root)` 文件夹
5. 点击 `Save`

### 步骤 4: 等待部署

- GitHub Actions 会自动构建和部署您的网站
- 通常需要 2-5 分钟
- 您可以在 `Actions` 标签中查看部署进度

### 步骤 5: 访问网站

部署完成后，您的网站地址将是：
`https://[您的用户名].github.io/oracal-words/`

## 故障排除

### 常见问题

1. **字体文件加载失败**
   - 确保 `resources/oracel.woff` 文件存在
   - 检查文件大小是否正常（约4.2MB）

2. **数据文件加载失败**
   - 确保 `resources/single-word.json` 和 `resources/multi-word.json` 存在
   - 检查JSON文件格式是否正确

3. **页面显示空白**
   - 检查浏览器控制台是否有错误信息
   - 确保所有资源文件路径正确

4. **GitHub Pages 不工作**
   - 检查仓库设置中的 Pages 配置
   - 确保选择了正确的分支和文件夹

### 调试步骤

1. **本地测试**
```bash
# 使用 Python 启动本地服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

2. **检查文件路径**
   - 确保所有资源文件都在正确的位置
   - 检查 `index.html` 中的文件路径

3. **查看部署日志**
   - 在 GitHub 仓库的 `Actions` 标签中查看部署日志
   - 检查是否有构建错误

## 自定义域名（可选）

如果您想使用自定义域名：

1. 在仓库的 `Settings > Pages` 中
2. 在 `Custom domain` 部分输入您的域名
3. 在您的域名提供商处添加 CNAME 记录：
   ```
   your-domain.com CNAME [您的用户名].github.io
   ```

## 更新部署

每次推送代码到 `master` 分支时，GitHub Actions 会自动重新部署：

```bash
git add .
git commit -m "更新内容"
git push origin master
```

## 性能优化建议

1. **压缩字体文件**
   - 使用 `woff2` 格式替代 `woff`
   - 可以显著减少文件大小

2. **优化图片**
   - 压缩任何图片资源
   - 使用适当的图片格式

3. **启用 Gzip 压缩**
   - GitHub Pages 会自动启用

## 安全注意事项

1. **不要提交敏感信息**
   - 确保 `.gitignore` 文件正确配置
   - 不要提交 API 密钥或密码

2. **定期更新依赖**
   - 如果使用任何外部库，定期更新

## 监控和维护

1. **定期检查网站**
   - 确保所有功能正常工作
   - 检查加载速度

2. **备份数据**
   - 定期备份 `resources/` 文件夹中的数据
   - 考虑使用 Git LFS 管理大文件

## 联系支持

如果遇到问题：
1. 检查 GitHub Pages 状态：https://www.githubstatus.com/
2. 查看 GitHub 文档：https://docs.github.com/en/pages
3. 在仓库中创建 Issue 描述问题 