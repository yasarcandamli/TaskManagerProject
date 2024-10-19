# Görev Yönetim Uygulaması

Bu proje, kullanıcıların görev oluşturmasına, güncellemesine ve silmesine olanak tanıyan basit bir görev yönetim uygulamasıdır. Uygulama, React.js kullanılarak geliştirilmiştir ve verilerin yönetimi için Axios kütüphanesinden yararlanılmıştır.

## Özellikler

- Görev oluşturma
- Görevleri listeleme
- Görev güncelleme
- Görev silme

## Teknolojiler

- **Frontend:** React.js, Axios
- **Veri Yönetimi:** JSON Server (db.json)

## Kurulum

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/yasarcandamli/TaskManagerProject.git
   ```

2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. JSON Server'ı başlatın:

   ```bash
   npx json-server api/db.json
   ```

4. Uygulamayı başlatın:
   ```bash
   npm run dev
   ```

## Kullanım

1. Uygulamayı tarayıcıda açın
2. Görev adı ve açıklaması ile yeni bir görev oluşturun.
3. Var olan görevleri güncelleyin veya silin.
