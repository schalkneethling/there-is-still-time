import { WIDGET_KEYS, getDefaultTimeZone } from "./time-calculations.js";

const STORAGE_KEY = "there-is-still-time:v1";

/** @typedef {{ widgets: string[]; timezone: string | null }} AppSettings */

/** @returns {AppSettings} */
export function defaultSettings() {
  return {
    widgets: [...WIDGET_KEYS],
    timezone: null,
  };
}

/** @returns {AppSettings} */
export function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSettings();
    const data = JSON.parse(raw);
    const widgets = Array.isArray(data.widgets)
      ? data.widgets.filter((k) => WIDGET_KEYS.includes(k))
      : [...WIDGET_KEYS];
    const timezone =
      typeof data.timezone === "string" && data.timezone.length > 0 ? data.timezone : null;
    return {
      widgets: widgets.length ? widgets : [...WIDGET_KEYS],
      timezone,
    };
  } catch {
    return defaultSettings();
  }
}

/** @param {AppSettings} s */
export function saveSettings(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

/**
 * @param {AppSettings} s
 * @returns {string}
 */
export function resolvedTimeZone(s) {
  return s.timezone ?? getDefaultTimeZone();
}
