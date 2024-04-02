
import axios from 'axios';
import { axiosConfig } from '@perrybabbitt/proxy';
import { sleep } from '@perrybabbitt/sleep';
import { formatTimestamp } from '@perrybabbitt/date-time-processor';
import { notify } from 'feishu-notifier';
import { log } from '@perrybabbitt/log';


// simple_currency_converter.js

class CurrencyConverter {
    constructor(rates) {
        this.rates = rates;
    }

    convert(amount, fromCurrency, toCurrency) {
        const fromRate = this.rates[fromCurrency];
        const toRate = this.rates[toCurrency];
        if (fromRate && toRate) {
            return (amount * toRate) / fromRate;
        } else {
            console.log('Invalid currency.');
            return null;
        }
    }
}

// Example usage
const rates = {
    USD: 1, // 1 USD = 1 USD
    EUR: 0.85, // 1 USD = 0.85 EUR
    GBP: 0.73 // 1 USD = 0.73 GBP
};
const converter = new CurrencyConverter(rates);
console.log(converter.convert(100, 'USD', 'EUR')); // 85
console.log(converter.convert(100, 'USD', 'GBP')); // 73
