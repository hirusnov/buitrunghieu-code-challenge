import { InputNumber } from 'antd'
import React, { FC } from 'react'

interface Props {
  placeholder: string
  value?: number
  onChange?: (value: number | null) => void
}

const CurrencyInput: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <InputNumber
      controls={false}
      variant="borderless"
      size="large"
      placeholder={placeholder}
      className="w-full"
      value={value}
      onChange={onChange}
    />
  )
}

export default CurrencyInput
