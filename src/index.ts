import PhoneNumber from 'awesome-phonenumber'

export function beautify(phoneNumberString: string) {
  const rfcPhoneNumber = new PhoneNumber(phoneNumberString).getNumber('rfc3966')

  if (!rfcPhoneNumber) return ''

  const [countryCode, regionCode, ..._phoneNumberArray] = rfcPhoneNumber
    .slice(4)
    .split('-')

  const isValid = _phoneNumberArray.length > 0

  const phoneNumberCharacters = isValid ? _phoneNumberArray.join('').split('') : regionCode.split('')

  const phoneNumberLength = phoneNumberCharacters.length
  const isOddNumber = phoneNumberLength % 2 !== 0

  const phoneNumber = phoneNumberCharacters.reduce((totalValue, currentValue, index) => {
    const result = totalValue + currentValue
    let prefix = ''

    const isOddIndex = index % 2 !== 0
    const isLastIndex = index === phoneNumberLength - 1
    const isPenultIndex = index === phoneNumberLength - 2

    if (isOddIndex && !isLastIndex) prefix = '-'

    if (isOddNumber && isPenultIndex) prefix = ''

    return result + prefix
  }, '')

  return isValid ? `${countryCode} (${regionCode}) ${phoneNumber}` : `${countryCode} ${phoneNumber}`
}
