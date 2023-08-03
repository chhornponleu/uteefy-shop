import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { useLayoutEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { km } from "./locales/km";

export function useI18nInitializer() {


    return { isI18nReady };
}
