import { createI18n } from 'vue-i18n'

export const messages = {
  en: {
    message: {
      hello: "hello world",
      login: 'Login',
      homepage: 'Home Page',
      contact: 'Contact Us',
      copyrights: 'Copyright © 2021',
      close: 'Close',
      title: 'Title',
      name: 'Name',
      email: 'Email',
      password: 'Password'
    },
  },
  tr: {
    message: {
      hello: "Selamınaleyküm",
      login: 'Giriş',
      homepage: 'Anasayfa',
      contact: 'İletişim',
      copyrights: 'Tüm hakkı saklıdır. © 2021',
      close: 'Kapat',
      title: 'Ünvan',
      name: 'Ad Soyad',
      email: 'Eposta',
      password: 'Şifre'
    },
  },
};

export const i18n = createI18n({
    locale: 'tr',
    fallbackLocale: 'tr',
    messages,
  })