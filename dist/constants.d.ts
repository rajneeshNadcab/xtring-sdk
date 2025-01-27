import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    KOVAN = 42,
    BNBTEST = 97,
    MATICTEST = 80001,
    TARALTEST = 1205,
    MARKLE = 1909,
    GSCTEST = 1223,
    ASIANTEST = 7890,
    DOTBLOX = 7923,
    DSC = 1555
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS: {
    1: string;
    3: string;
    4: string;
    42: string;
    97: string;
    80001: string;
    1205: string;
    1909: string;
    1223: string;
    7890: string;
    7923: string;
    1555: string;
};
export declare const INIT_CODE_HASH: {
    1: string;
    3: string;
    4: string;
    42: string;
    97: string;
    80001: string;
    1205: string;
    1909: string;
    1223: string;
    7890: string;
    7923: string;
    1555: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
