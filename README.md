# Phone Number Beautifier

Lib for beautify phone number.

## Installation

```
npm i -S @already-existed/phone-number-beautifier
```

## Usage

```tsx
// Ex: React Component
import { beautify } from '@already-existed/phone-number-beautifier'

function PhoneNumber({ value }: { value: string }) {
  return <>{beautify(value)}</>
}

function App() {
  return <PhoneNumber value="+380997836817"> // +380 (99) 78-36-817
}
```
