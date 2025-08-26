# Azure App Service デプロイ トラブルシューティング（Next.js 静的サイト）

## 対象
- Next.js 15（App Router）+ TypeScript
- `next.config.ts` にて `output: 'export'`（静的サイト出力、`out/` 配下へ生成）
- GitHub Actions + `azure/webapps-deploy@v3` による Azure App Service (Linux, Node 18) へのデプロイ

## 症状
- GitHub Actions／Azure 側では「デプロイ成功」と表示されるが、サイトURLを開くと以下の既定ページのまま:
  - "Your web app is running and waiting for your content"

## これまでの検証と事実
- ローカル/CI ビルドの `out/` 直下に `index.html` が生成されている。
- ワークフローを修正し、`out` の「中身のみ」を ZIP（`site.zip`）のルートに格納するよう変更。
  - ZIP の中身を検証し、ルート直下に `index.html` が存在することを確認済み。
- GitHub Actions は `package: ./site.zip` で Azure へ配布するよう更新済み。

### 変更後ワークフロー抜粋（該当箇所）
```yaml
      - name: Build application
        run: npm run build

      - name: List build output
        run: ls -la out/

      - name: Archive static site
        run: cd out && zip -r ../site.zip .

      - name: Deploy to Azure App Service
        uses: azure/webapps-deploy@v3
        with:
          app-name: app-002-gen10-step3-2-node-oshima6
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: ./site.zip
```

### Next.js 設定抜粋
```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
};
export default nextConfig;
```

## 根本原因（高い確度）
- App Service の `WEBSITE_RUN_FROM_PACKAGE`（Run From Package）が有効な状態だと、実行時に `wwwroot` が ZIP パッケージとしてマウントされます。
  - その場合、Zip Deploy で `/home/site/wwwroot` に展開されたファイルは“実行時には参照されず”、既存のマウント対象が優先されます。
  - 結果として、実際には `index.html` を配備できているにも関わらず、既定ページ（"Your web app is running and waiting for your content"）が表示され続けます。

補足:
- 以前は `./out` フォルダごと配布していたため、`wwwroot/out/index.html` となり、`wwwroot` 直下に `index.html` が無い問題もありましたが、現在は `site.zip` 化で解消済み。
- それでも表示が変わらないのは、Run From Package により“展開内容が無視されている”ことが主因として矛盾がありません。

## 切り分け手順
1) Azure ポータル → 対象 App Service → 開発ツール「高度なツール（Kudu）」→ Debug console（Linux: Bash）
2) パス `/home/site/wwwroot` を参照し、`index.html` の有無を確認
   - ある: 配布は成功。実行時に参照されていない → Run From Package 影響が濃厚
   - ない: `app-name`/スロット不一致やデプロイ対象の取り違えの可能性を再確認

## 解決策
### 対処A（推奨: 静的サイトの場合）— Run From Package を無効化
1) Azure ポータル → 構成 → アプリケーション設定
2) `WEBSITE_RUN_FROM_PACKAGE` を削除、または値を空/0 に変更
3) 保存 → アプリの再起動
4) GitHub Actions を再実行（または適当なコミットをプッシュ）

→ 以後、Zip Deploy で `/home/site/wwwroot` に展開された `index.html` がそのまま配信されます。

### 対処B — Run From Package を継続利用
- 実行対象のパッケージを最新の `site.zip` に置き換えます。
  - 例: `WEBSITE_RUN_FROM_PACKAGE` に BLOB 等の ZIP URL を設定、もしくは Kudu 経由の ZIP 配置と `packagename.txt` の更新。
- ただし静的サイトのみであれば、対処A のほうが運用が簡単です。

## 追加チェック
- App Service → 構成 → パス マッピング: ルート `/` が `site/wwwroot` を指しているか
- 既定ドキュメントに `index.html` が含まれているか（Windows プランの IIS のみ該当）
- `hostingstart.html` が残存している場合は Kudu で削除（Linux では影響限定的）
- 実際に開いている URL が `app-name: app-002-gen10-step3-2-node-oshima6`（または該当スロット）と一致しているか

## 参考
- Azure 公式（Zip Deploy / Run From Package の仕様要点）
  - ZIP 配布は基本 `/home/site/wwwroot` へ解凍配置
  - Run From Package 有効時は ZIP をマウントし `wwwroot` は読み取り専用、解凍された内容は実行時に参照されない

---
最終更新: 2025-08-27 