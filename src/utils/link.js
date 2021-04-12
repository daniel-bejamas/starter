const hasPrefix = (url = "", pattern = []) => pattern.some(prefix => url.includes(prefix))

export const isExternalLink = url => hasPrefix(url, ["http://", "https://"])
export const isUtilityLink = url =>
  hasPrefix(url, ["mailto:", "tel:", "callto:", "skype:", "sms:", "fax:"])
