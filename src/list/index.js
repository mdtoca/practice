import React, { Component } from 'react';
import axios from 'axios';
import PercentChange from './percent-change';
import { TableWrap, TableHead, TableRow, RowItem } from './styles';

const tableHeaders = [
  '#',
  'Name',
  'Market Cap',
  'Price',
  'Volume (24hr)',
  'Circulating Supply',
  'Change (24hr)',
];

export function isPriceInvalid(price) {
  return !price || !Number.isFinite(price);
}

export const formatDollars = (
  price,
  locales = 'en-US',
  localCurrency = 'USD',
) => {
  if (isPriceInvalid(price)) {
    return '--';
  }
  return price.toLocaleString(locales, {
    style: 'currency',
    currency: localCurrency,
  });
};

export const formatNumber = number => number.toLocaleString();


export default class CryptoTable extends Component {
  state = {
    coinMarketCapData: [],
  };

  async componentDidMount() {
    const { data: { data } }  = await axios.get(
      'https://api.coinmarketcap.com/v2/ticker/?limit=100&structure=array',
    );
    console.log('data', data);
    this.setState({ coinMarketCapData: data });
  }

  removeCrypto = (cryptoId) => {
    const { coinMarketCapData } = this.state;
    this.setState({
      coinMarketCapData: coinMarketCapData.filter(coin => coin.id !== cryptoId)
    })
  };

  render() {
    const { coinMarketCapData } = this.state;
    return (
      <TableWrap>
        <TableHead>
          {tableHeaders.map(item => <p>{item}</p>)}
        </TableHead>
        {coinMarketCapData.map(crypto => (
          <TableRow key={crypto.id}>
            <RowItem>{crypto.rank}</RowItem>
            <RowItem isName onClick={() => this.removeCrypto(crypto.id)}>
              {crypto.name} <span>({crypto.symbol})</span>
            </RowItem>
            <RowItem>{formatDollars(crypto.quotes.USD.market_cap)}</RowItem>
            <RowItem>{formatDollars(crypto.quotes.USD.price)}</RowItem>
            <RowItem>{formatDollars(crypto.quotes.USD.volume_24h)}</RowItem>
            <RowItem>
              {formatNumber(crypto.circulating_supply)} {crypto.symbol}
            </RowItem>
            <RowItem>
              <PercentChange
                percentChange={crypto.quotes.USD.percent_change_24h}
              />
            </RowItem>
          </TableRow>
        ))}
      </TableWrap>
    );
  }
}
