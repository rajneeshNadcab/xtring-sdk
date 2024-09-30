import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(
    chainId: ChainId,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string,
    underlying?: any,

    ContractVersion?: any,
    destChains?: any,
    logoUrl?: any,
    price?: any,
    tokenid?: any,
    version?: any,
    routerToken?: any,
  ) {
    super(
      decimals,
      symbol,
      name,
      underlying,
      chainId,
      ContractVersion,
      destChains,
      logoUrl,
      price,
      tokenid,
      version,
      routerToken,
    )
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    // console.log(other)
    // console.log(this)
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token( ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether' ),
  [ChainId.ROPSTEN]: new Token( ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether' ),
  [ChainId.RINKEBY]: new Token( ChainId.RINKEBY, '0xe41c4939D2CB35A4DD61e852e2aa00D493AF87A3', 18, 'WETH', 'Wrapped Ether' ),
  [ChainId.KOVAN]: new Token( ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BNBTEST]: new Token( ChainId.BNBTEST, '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MATICTEST]: new Token( ChainId.MATICTEST, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.TARALTEST]: new Token( ChainId.TARALTEST, '0x2Ad8d4E76F71737b0FAb0cd0d86112436BcEfA2F', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MARKLE]: new Token( ChainId.MARKLE, '0xE266AF6bba38B3BA115236406c9d33E1D7CAD73d', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.GSCTEST]: new Token( ChainId.GSCTEST, '0x43E830e3afC3DbD94E82da2e127A03ec6F973ECC', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ASIANTEST]: new Token( ChainId.ASIANTEST, '0x8fE68b4Ee4912d2819B9F7aefEB67dF817509d9c', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.DSC]: new Token( ChainId.DSC, '0xE8Bdf8d0CD100caddCC729D5f77fb4e5C6Cf933a', 18, 'WETH', 'Wrapped Ether'),

}
