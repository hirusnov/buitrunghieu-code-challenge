interface WalletBalance {
  currency: string;
  amount: number;
}
// interface FormattedWalletBalance {
//   currency: string;
//   amount: number;
//   formatted: string;
// }

//FormattedWalletBalance can be extended from WalletBalance
interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}
//Should specifically declare Props or just use BoxProps
interface Props extends BoxProps {}

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const getPriority = (blockchain: any): number => {
    switch (blockchain) {
      case "Osmosis":
        return 100;
      case "Ethereum":
        return 50;
      case "Arbitrum":
        return 30;
      // case "Zilliqa" and "Neo" return same value, so we can use one return for both
      case "Zilliqa":
      case "Neo":
        return 20;
      default:
        return -99;
    }
  };

  /**
   * balancePriority is declared but never read
   * lhsPriority is not declared => i dont know about context but I think lhsPriority is balancePriority so replace it with balancePriority
   */
  const sortedBalances = useMemo(() => {
    return (
      balances
        .filter(
          (balance: WalletBalance) =>
            //The nested if statement can make the code harder to read and understand and can be returned to value, with no need to return true/false
            balance.amount <= 0 && getPriority(balance.blockchain) > -99
        )
        //We can write it simpler and easier to read

        .sort(
          (lhs: WalletBalance, rhs: WalletBalance) =>
            // {
            //   const leftPriority = getPriority(lhs.blockchain);
            //   const rightPriority = getPriority(rhs.blockchain);
            //   return leftPriority - rightPriority;
            // }
            getPriority(lhs.blockchain) - getPriority(rhs.blockchain)
        )
    );
  }, [balances, prices]);

  /**
   * The formattedBalances array is not utilized effectively, declared but never use later on
   * the balance should be used FormattedWalletBalance interface instead of WalletBalance because the array returns new property that is formatted
   */
  const formattedBalances = sortedBalances.map(
    (balance: FormattedWalletBalance) => {
      return {
        ...balance,
        formatted: balance.amount.toFixed(),
      };
    }
  );

  const rows = sortedBalances.map(
    (balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        <WalletRow
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    }
  );

  return <div {...rest}>{rows}</div>;
};
