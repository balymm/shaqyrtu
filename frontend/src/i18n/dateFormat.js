// Форматирование даты/времени под язык интерфейса.
//
// Названия месяцев и дней недели заданы вручную (а не через Intl.DateTimeFormat
// с locale 'kk-KZ'), потому что поддержка казахской локали в Intl неполная и
// непредсказуемая в разных браузерах/ОС — ручные словари гарантируют
// одинаковый корректный результат везде.

const MONTHS = {
  kk: [
    "ҚАҢТАР", "АҚПАН", "НАУРЫЗ", "СӘУІР", "МАМЫР", "МАУСЫМ",
    "ШІЛДЕ", "ТАМЫЗ", "ҚЫРКҮЙЕК", "ҚАЗАН", "ҚАРАША", "ЖЕЛТОҚСАН",
  ],
  ru: [
    "ЯНВАРЬ", "ФЕВРАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ", "ИЮНЬ",
    "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ",
  ],
  tr: [
    "OCAK", "ŞUBAT", "MART", "NİSAN", "MAYIS", "HAZİRAN",
    "TEMMUZ", "AĞUSTOS", "EYLÜL", "EKİM", "KASIM", "ARALIK",
  ],
};

// Короткие подписи дней недели, начиная с понедельника (ДС/ПН/PZT).
const WEEKDAYS = {
  kk: ["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"],
  ru: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  tr: ["PZT", "SAL", "ÇAR", "PER", "CUM", "CMT", "PAZ"],
};

function fallbackLang(lang) {
  return MONTHS[lang] ? lang : "kk";
}

export function getMonthLabel(dateISO, lang) {
  const date = new Date(dateISO);
  return MONTHS[fallbackLang(lang)][date.getMonth()];
}

export function getWeekdayLabels(lang) {
  return WEEKDAYS[fallbackLang(lang)];
}

export function getDay(dateISO) {
  return new Date(dateISO).getDate();
}

export function getYear(dateISO) {
  return new Date(dateISO).getFullYear();
}

// Время в формате ЧЧ:ММ, 24-часовой формат везде (казахские/русские/турецкие
// приглашения одинаково привычны к 24-часовому времени, конвертация в AM/PM
// не нужна ни для одного из трёх языков).
export function getTimeLabel(dateISO) {
  const date = new Date(dateISO);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
