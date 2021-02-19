import i18n from "i18next";
import { CHANGE_LANGUAGE, LanguageActionTypes } from './languageActions'

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string, code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    {
      name: "中文",
      code: 'zh'
    },
    {
      name: 'English',
      code: 'en'
    }
  ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: LanguageState = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload).then()
      return { ...state, language: action.payload }
    default:
      return state
  }
}
