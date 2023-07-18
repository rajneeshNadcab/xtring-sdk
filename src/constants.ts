import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  KOVAN = 42,
  BNBTEST = 97,
  MATICTEST = 80001,
  TARALTEST = 1205,
  MARKLE = 1909,
  GSCTEST=1223,
  ASIANTEST=7890
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

// ht-main
// export const FACTORY_ADDRESS = '0xed776e576809012fb43382b37f576efbe3ab3390'
// export const INIT_CODE_HASH = '0xec98d1c1effef474f0f28b71824109c8f50ec6e9eb7e62724f6fcdd7aa966ba0'

//ht-test
// export const FACTORY_ADDRESS = '0x2302c14f2928bb9b68053320309b84db3702f89f'
// export const INIT_CODE_HASH = '0xec98d1c1effef474f0f28b71824109c8f50ec6e9eb7e62724f6fcdd7aa966ba0'

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0xe0A8cDE7CE50188E80AC21f08FF362b6E3185504',
  [ChainId.RINKEBY]: '0x9C88330C8aB3Cf53EeF61F4b2E7b2eC8c1e7E164',
  [ChainId.KOVAN]: '0xb3Aa9fc60D60Da5E10F325306611120e6d172eE4',
  [ChainId.BNBTEST]: '0x52Fed0350d106a0CF4BC154D9B79957D3a1211De',
  [ChainId.MATICTEST]: '0xe0A8cDE7CE50188E80AC21f08FF362b6E3185504',
  [ChainId.TARALTEST]: '0x43E830e3afC3DbD94E82da2e127A03ec6F973ECC',
  [ChainId.MARKLE]: '0xF75f090D66B77458fc7A4A25690e6B0D07E8cFB3',
  [ChainId.GSCTEST]: '0x10561C3B4042F02e19498c4Bbd27845669C568E7',
  [ChainId.ASIANTEST]: '0x2Ad8d4E76F71737b0FAb0cd0d86112436BcEfA2F'
}


export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ROPSTEN]: '0xd4aa1c36ae23c448b7dedb8e388618cc5a4ed50d7d9ed022cbec1aca4f7ac863',
  [ChainId.RINKEBY]: '0xd4aa1c36ae23c448b7dedb8e388618cc5a4ed50d7d9ed022cbec1aca4f7ac863',
  [ChainId.KOVAN]: '0xd4aa1c36ae23c448b7dedb8e388618cc5a4ed50d7d9ed022cbec1aca4f7ac863',
  [ChainId.BNBTEST]: '0xd4aa1c36ae23c448b7dedb8e388618cc5a4ed50d7d9ed022cbec1aca4f7ac863',
  [ChainId.MATICTEST]: '0xd4aa1c36ae23c448b7dedb8e388618cc5a4ed50d7d9ed022cbec1aca4f7ac863',
  [ChainId.TARALTEST]: '0x279989b1cea3ab0f2e806ab9092aa4aa750970e9f0e507839c8272c168cc1232',
  [ChainId.MARKLE]: '0x279989b1cea3ab0f2e806ab9092aa4aa750970e9f0e507839c8272c168cc1232',
  [ChainId.GSCTEST]: '0x0251b213f17e351fa1600ff869f5af775affaa4ed4e09bb794630996d29adc87',
  [ChainId.ASIANTEST]: '0x0251b213f17e351fa1600ff869f5af775affaa4ed4e09bb794630996d29adc87'
}



//ftm,matic,xdai,bsc
// export const FACTORY_ADDRESS = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
// export const INIT_CODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

// eth-test
// export const FACTORY_ADDRESS = '0x5C487A8a1915655bB9863d59D2519c01C1A427d7'
// export const INIT_CODE_HASH = '0x114c9724259a17666131b2946e9649a7a5556f4be0899ae8fa0e3adc5d7ac247'

// eth-main
// export const FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
// export const INIT_CODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
