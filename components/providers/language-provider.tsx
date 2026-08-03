"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionary, type Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/types";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "zh",
  t: dictionary.zh,
  toggle: () => {},
});

const STORAGE_KEY = "aimcc-locale";
const CHANGE_EVENT = "aimcc-locale-change";

function subscribeLocale(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function readLocale(): Locale {
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "zh";
}

/**
 * 站点框架语言（中 / EN）切换。
 * 语言选择持久化在 localStorage（外部状态，用 useSyncExternalStore 订阅），
 * 服务端渲染默认中文，并同步 <html lang>。
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, readLocale, () => "zh" as Locale);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en-AU";
  }, [locale]);

  const toggle = useCallback(() => {
    const next = readLocale() === "zh" ? "en" : "zh";
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: dictionary[locale], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
