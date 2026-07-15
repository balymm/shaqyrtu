// Словарь переводов интерфейса. Тексты, специфичные для события (имя, адрес,
// текст приглашения) — в eventConfig.js, там тоже объекты { kk, ru, tr }.
//
// Структура: каждый язык — плоский объект с одинаковым набором ключей.
// При добавлении нового ключа — обязательно добавляйте его во все три языка,
// иначе на недостающем языке будет undefined в интерфейсе.

export const translations = {
  kk: {
    topLabel: "Мерейтой",
    welcomeLabel: "Мерейтойға шақыру",
    openInvitation: "Шақыруды ашу",

    invitationHeading: "Құрметті қонақтар!",

    calendarStartTimeLabel: "Басталу уақыты",

    locationHeading: "Мекен-жайы",
    mapButtonLabel: "2GIS картасына өту",

    rsvpHeading: "Тойға қатысуыңызды растаңыз",
    rsvpNamePlaceholder: "Аты-жөніңіз",
    rsvpSpouseNote: "Жұбайыңызбен келсеңіз, есімдеріңізді бірге жаза кетіңіз",
    rsvpOptionComing: "Әрине келемін",
    rsvpOptionComingWithSpouse: "Жұбайыммен келемін",
    rsvpOptionNotComing: "Келе алмаймын",
    rsvpErrorName: "Аты-жөніңізді толық енгізіңіз",
    rsvpErrorStatus: "Жауап түрін таңдаңыз",
    rsvpErrorGeneric: "Қате шықты, қайталап көріңіз",
    rsvpSuccessMsg: "Рахмет! Жауабыңыз қабылданды.",
    rsvpSubmitting: "Жіберілуде…",
    rsvpSubmit: "Жауапты жіберу",

    countdownHeading: "Тойға дейін",
    countdownOver: "Мерейтой басталды!",
    unitDays: "Күн",
    unitHours: "Сағат",
    unitMinutes: "Минут",
    unitSeconds: "Секунд",

    musicOn: "Музыканы тоқтату",
    musicOff: "Музыканы қосу",
  },

  ru: {
    topLabel: "Юбилей",
    welcomeLabel: "Приглашение на юбилей",
    openInvitation: "Открыть приглашение",

    invitationHeading: "Дорогие гости!",

    calendarStartTimeLabel: "Время начала",

    locationHeading: "Место проведения",
    mapButtonLabel: "Открыть в 2ГИС",

    rsvpHeading: "Подтвердите своё участие",
    rsvpNamePlaceholder: "Ваше имя и фамилия",
    rsvpSpouseNote: "Если придёте с супругом(ой) — укажите оба имени",
    rsvpOptionComing: "Обязательно приду",
    rsvpOptionComingWithSpouse: "Приду с супругом(ой)",
    rsvpOptionNotComing: "Не смогу прийти",
    rsvpErrorName: "Пожалуйста, укажите полное имя",
    rsvpErrorStatus: "Выберите вариант ответа",
    rsvpErrorGeneric: "Произошла ошибка, попробуйте ещё раз",
    rsvpSuccessMsg: "Спасибо! Ваш ответ принят.",
    rsvpSubmitting: "Отправка…",
    rsvpSubmit: "Отправить ответ",

    countdownHeading: "До юбилея осталось",
    countdownOver: "Юбилей уже начался!",
    unitDays: "Дней",
    unitHours: "Часов",
    unitMinutes: "Минут",
    unitSeconds: "Секунд",

    musicOn: "Выключить музыку",
    musicOff: "Включить музыку",
  },

  tr: {
    topLabel: "Yıl Dönümü",
    welcomeLabel: "Yıl Dönümü Davetiyesi",
    openInvitation: "Davetiyeyi Aç",

    invitationHeading: "Değerli Misafirler!",

    calendarStartTimeLabel: "Başlama Saati",

    locationHeading: "Konum",
    mapButtonLabel: "2GIS'te Aç",

    rsvpHeading: "Katılımınızı Onaylayın",
    rsvpNamePlaceholder: "Adınız Soyadınız",
    rsvpSpouseNote: "Eşinizle geleceksiniz, lütfen isimlerinizi birlikte yazın",
    rsvpOptionComing: "Kesinlikle Gelirim",
    rsvpOptionComingWithSpouse: "Eşimle Gelirim",
    rsvpOptionNotComing: "Katılamayacağım",
    rsvpErrorName: "Lütfen adınızı ve soyadınızı girin",
    rsvpErrorStatus: "Lütfen bir seçenek belirleyin",
    rsvpErrorGeneric: "Bir hata oluştu, lütfen tekrar deneyin",
    rsvpSuccessMsg: "Teşekkürler! Cevabınız alındı.",
    rsvpSubmitting: "Gönderiliyor…",
    rsvpSubmit: "Cevabı Gönder",

    countdownHeading: "Etkinliğe Kalan Süre",
    countdownOver: "Kutlama başladı!",
    unitDays: "Gün",
    unitHours: "Saat",
    unitMinutes: "Dakika",
    unitSeconds: "Saniye",

    musicOn: "Müziği Kapat",
    musicOff: "Müziği Aç",
  },
};

export const SUPPORTED_LANGUAGES = ["kk", "ru", "tr"];
export const DEFAULT_LANGUAGE = "kk";

export const LANGUAGE_LABELS = {
  kk: "ҚАЗ",
  ru: "РУС",
  tr: "TÜR",
};
