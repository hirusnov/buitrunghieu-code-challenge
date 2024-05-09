import React, { FC } from 'react'
import { Select } from 'antd'
import { filteredCurrencies } from '../utils/currencyUtils'
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined'

interface IProps {
  value?: string
  onChange?: (value: string) => void
}

const CurrencySelect: FC<IProps> = ({ value, onChange }) => {
  return (
    <Select
      showSearch
      value={value}
      onChange={onChange}
      size="large"
      dropdownStyle={{ backgroundColor: '#282a36', color: 'white' }}
      variant="borderless"
      suffixIcon={<CaretDownOutlined className="text-[#848e8f]" />}
    >
      {filteredCurrencies.map(({ currency, img, price }) => (
        <Select.Option
          key={currency}
          value={JSON.stringify({ currency, price })}
        >
          <div className="flex gap-x-2">
            <img src={img} alt={currency} width={25} />
            <p className="m-0">{currency}</p>
          </div>
        </Select.Option>
      ))}
    </Select>
  )
}

export default CurrencySelect
