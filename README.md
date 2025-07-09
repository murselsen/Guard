# Money Guard

Money Guard, kişisel finans yönetimi için geliştirilmiş bir React uygulamasıdır. Gelir ve giderlerinizi takip edebilir, döviz kurlarını görüntüleyebilir ve finansal istatistiklerinizi analiz edebilirsiniz.

## Özellikler

- Kullanıcı kaydı ve giriş/çıkış işlemleri
- Gelir/gider işlemlerinin eklenmesi, düzenlenmesi ve silinmesi
- Döviz kuru tablosu
- Finansal istatistikler ve raporlar
- Responsive tasarım (mobil ve masaüstü uyumlu)
- Redux ile global durum yönetimi
- Kalıcı oturum için redux-persist entegrasyonu

## Kurulum

1. Depoyu klonlayın:
   ```sh
   git clone https://github.com/kullanici-adi/Guard.git
   cd Guard
   ```

2. Bağımlılıkları yükleyin:
   ```sh
   npm install
   ```

3. Geliştirme sunucusunu başlatın:
   ```sh
   npm run dev
   ```

4. Uygulamayı [http://localhost:5173](http://localhost:5173) adresinde görüntüleyebilirsiniz.

## Proje Yapısı

- `src/components/` — Uygulama bileşenleri (Navbar, Balance, TransactionsList, vb.)
- `src/pages/` — Sayfa bileşenleri (HomePage, LoginPage, RegistrationPage, vb.)
- `src/redux/` — Redux store ve slice dosyaları
- `public/` — Statik dosyalar ve görseller

## Kullanılan Teknolojiler

- React
- Redux Toolkit & Redux Persist
- React Router
- Formik & Yup
- Axios
- Vite

## Katkıda Bulunma

Katkıda bulunmak için lütfen bir fork oluşturun ve pull request gönderin.

---
