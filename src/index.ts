import PhoneNumber from 'awesome-phonenumber'

export function beautify(phoneNumberString: string) {
  const [countryCode, regionCode, ..._phoneNumberArray] = new PhoneNumber(phoneNumberString)
    .getNumber('rfc3966')
    .slice(4)
    .split('-')

  const phoneNumberCharacters = _phoneNumberArray.join('').split('')

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

  return `${countryCode} (${regionCode}) ${phoneNumber}`
}
