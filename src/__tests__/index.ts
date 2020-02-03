import { beautify } from '../../src'

test('should beautify phone numbers', () => {
  expect(beautify('+380997836817')).toBe('+380 (99) 78-36-817') // UA
  expect(beautify('+79581119824')).toBe('+7 (958) 11-19-824') // RU
  expect(beautify('+77053331164')).toBe('+7 (705) 33-31-164') // KZ
  expect(beautify('+49893438014')).toBe('+49 (89) 34-38-014') // DE
  expect(beautify('+33769211222')).toBe('+33 (7) 69-21-12-22') // FR
})
