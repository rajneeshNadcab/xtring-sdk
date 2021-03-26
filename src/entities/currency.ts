import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  public readonly isUnderlying?: number
  public readonly isCrossChain?: number

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'BASECURRENCY', 'BASECURRENCY')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   * @param isUnderlying of is Underlying
   * @param isCrossChain of is CrossChain
   */
  protected constructor(decimals: number, symbol?: string, name?: string, isUnderlying?: number, isCrossChain?: number) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.isUnderlying = isUnderlying
    this.isCrossChain = isCrossChain
  }
}

const ETHER = Currency.ETHER
export { ETHER }
