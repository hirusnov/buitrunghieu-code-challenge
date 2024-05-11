import { Button, Card, Form, Spin, message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { FC, useEffect, useState } from 'react'
import SwapOutlined from '@ant-design/icons/SwapOutlined'
import CurrencyInput from './components/CurrencyInput'
import CurrencySelect from './components/CurrencySelect'
import { USD_INIT, WBTC_INIT } from './utils/currencyUtils'

const FancyForm: FC = () => {
  const [form] = useForm()
  const formValues = Form.useWatch([], form)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false)

  const getConvertRate = (
    currency1ToUsdRate: number,
    currency2ToUsdRate: number
  ) => currency1ToUsdRate / currency2ToUsdRate

  const getConvertedAmount = (
    currency1Amount: number,
    currency1ToUsdRate: number,
    currency2ToUsdRate: number
  ) => currency1Amount * getConvertRate(currency1ToUsdRate, currency2ToUsdRate)

  const onConvertCurrency = (
    currency1Amount: number,
    pos1: number,
    pos2: number,
    fieldName: string
  ) => {
    if (currency1Amount < 0) return
    const currency1 = JSON.parse(formValues[`currencySelect${pos1}`])
    const currency2 = JSON.parse(formValues[`currencySelect${pos2}`])
    const currency2Amount = getConvertedAmount(
      currency1Amount,
      currency1.price,
      currency2.price
    )
    form.setFieldValue(fieldName, currency2Amount)
    form.validateFields([fieldName])
  }

  const validator = (value: number) => {
    if (value < 0) {
      return Promise.reject(new Error('Amount must be >= 0 !'))
    }
    return Promise.resolve()
  }

  const onFinish = (values: any) => {
    const { currency1 } = values
    try {
      setIsButtonLoading(true)
      //demo default 1
      if (currency1 > 1) {
        throw new Error('Your balance is not enough to swap!')
      }
      setTimeout(() => {
        setIsButtonLoading(false)
        message.success('Swap successfully!')
      }, 2000)
    } catch (err: any) {
      setIsButtonLoading(false)
      message.error(err.message)
    }
  }

  const onChangeCurrency = (value: string, pos: number) => {
    const swapPos = pos === 1 ? 2 : 1

    if (value === formValues[`currencySelect${pos}`]) {
      const oldCurData = formValues[`currencySelect${swapPos}`]
      const oldAmount1 = formValues[`currency${swapPos}`]
      const oldAmount2 = formValues[`currency${pos}`]

      form.setFieldsValue({
        [`currencySelect${pos}`]: oldCurData,
        [`currency${pos}`]: oldAmount1,
        [`currency${swapPos}`]: oldAmount2,
      })
    } else {
      form.resetFields(['currency1', 'currency2'])
    }
  }

  const switchCurrency = () => {
    const tempCurrency1 = formValues.currency1
    const tempCurrencySelect1 = formValues.currencySelect1

    form.setFieldsValue({
      currency1: formValues.currency2,
      currency2: tempCurrency1,
      currencySelect1: formValues.currencySelect2,
      currencySelect2: tempCurrencySelect1,
    })
  }

  const getCurrency = (field: string, keyValue = 'currency') =>
    formValues?.[field] && ' ' + JSON.parse(formValues[field])[keyValue]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [isLoading])

  return (
    <Spin spinning={isLoading}>
      <div className="flex items-center justify-center h-screen">
        <Form
          name="currencySwapForm"
          layout="horizontal"
          form={form}
          onFinish={onFinish}
        >
          <Card
            title={<div className="text-center text-2xl">Currency Swap</div>}
            styles={{
              header: { backgroundColor: '#282A36', color: 'white' },
              body: { backgroundColor: '#2B3139', color: 'white' },
            }}
          >
            <div className="flex justify-between text-[#848e9c] font-bold">
              <p className="m-0 mb-5">
                Balance: 1{getCurrency('currencySelect1')}
              </p>
              <p className="m-0 mb-5">
                1 {getCurrency('currencySelect1')} &cong;
                {getConvertRate(
                  getCurrency('currencySelect1', 'price'),
                  getCurrency('currencySelect2', 'price')
                ).toFixed(9)}
                {getCurrency('currencySelect2')}
              </p>
            </div>
            <div className="flex w-full">
              <Form.Item
                name="currency1"
                className="mb-0"
                getValueFromEvent={(amount) => {
                  onConvertCurrency(amount, 1, 2, 'currency2')
                  return amount
                }}
                rules={[
                  { required: true, message: 'Please enter amount!' },
                  { validator: (_, value) => validator(value) },
                ]}
              >
                <CurrencyInput placeholder="From..." />
              </Form.Item>
              <Form.Item
                name="currencySelect1"
                className="mb-0 w-32"
                initialValue={JSON.stringify(USD_INIT)}
                getValueFromEvent={(value) => {
                  onChangeCurrency(value, 2)
                  return value
                }}
              >
                <CurrencySelect />
              </Form.Item>
            </div>
            <div className="text-center my-2">
              <SwapOutlined
                rotate={90}
                className="text-white hover:text-orange-400 cursor-pointer text-xl"
                onClick={switchCurrency}
              />
            </div>
            <div className="flex">
              <Form.Item
                name="currency2"
                getValueFromEvent={(amount) => {
                  onConvertCurrency(amount, 2, 1, 'currency1')
                  return amount
                }}
                rules={[
                  { required: true, message: 'Please enter amount!' },
                  { validator: (_, value) => validator(value) },
                ]}
              >
                <CurrencyInput placeholder="To..." />
              </Form.Item>
              <Form.Item
                name="currencySelect2"
                className="w-32"
                initialValue={JSON.stringify(WBTC_INIT)}
                getValueFromEvent={(value) => {
                  onChangeCurrency(value, 1)
                  return value
                }}
              >
                <CurrencySelect />
              </Form.Item>
            </div>
            <Button
              loading={isButtonLoading}
              className="font-bold w-full rounded-2xl h-10"
              type="primary"
              htmlType="submit"
            >
              SWAP
            </Button>
          </Card>
        </Form>
      </div>
    </Spin>
  )
}

export default FancyForm
