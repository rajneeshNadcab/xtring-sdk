import { ChainId } from '../constants';
import { Currency } from './currency';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly chainId: ChainId;
    readonly address: string;
    constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string, underlying?: any, ContractVersion?: any, destChains?: any, logoUrl?: any, price?: any, tokenid?: any, version?: any, routerToken?: any);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export declare const WETH: {
    1: Token;
    3: Token;
    4: Token;
    42: Token;
    97: Token;
    80001: Token;
    1205: Token;
    1909: Token;
    1223: Token;
    7890: Token;
    1555: Token;
};
