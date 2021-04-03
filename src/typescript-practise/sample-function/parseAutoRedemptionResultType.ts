export interface LoyaltyPlatformResponse {
  status: {
    success: boolean;
    message: string;
  };
}

// lp catalogue models
export interface CatalogueResponse extends LoyaltyPlatformResponse {
  experiences: Array<object>;
}

export interface CatalogueItemMerchantsResponse extends LoyaltyPlatformResponse {
  data: Array<object>;
}

// lp wallet models
export interface WalletResponse extends LoyaltyPlatformResponse {
  active_vouchers?: Array<object>;
  used_vouchers?: Array<object>;
}


export interface TransactionResponse extends LoyaltyPlatformResponse {
  transaction_summary?: Array<LPTransaction>;
}

// lp checkout models
export interface LPCartItem {
  experience_id: number;
  qty: number;
}

export interface LPCheckoutRequest {
  cart_items: LPCartItem[];
  cart_value: number;
  vhz_transaction_id: string;
  delivery_type: number;
}

export interface LPCheckoutResponse extends LoyaltyPlatformResponse {
  lp_transaction_id?: string;
  vhz_transaction_id?: string;
  has_togive_hp?: boolean;
  health_points_to_give?: number;
}

// Activate-Voucher
export interface LPActivateVoucherRequest {
  voucher_id: string;
}

export interface LPActivateVoucherResponse extends LoyaltyPlatformResponse {
  voucher_id?: string;
  voucher_code?: string;
  erid?: string;
}

// lp auth models
export interface LPTokenRepresentation {
  token: string;
  expiresOn: number;
}

export interface LPTransaction {
  TransactionID: string;
  transaction_time: string;
  health_points_used: string;
  vouchers: Array<object>;
}

export enum LPThirdPartyVoucherType {
  TAP_FOR_MORE = "tapformore",
  TRANSIT_LINK = "transitlink",
  NONE = "none"
}

export enum LPFieldName {
  AUTO_REDEEM_TYPE = "default_redem_type",
  TAP_FOR_MORE_ID = "tapfourmoreid",
  TRANSIT_LINK_ID = "transitlinkid"
}

export enum LPCatalogueItemName {
  TRANSIT_LINK = "TransitLink",
  TAP_FOR_MORE = "TapForMore"
}

export interface LPCustomerResponse extends LoyaltyPlatformResponse {
  customer: {
    custom_fields: {
      field: Array<{ name: LPFieldName; value: string }>;
    };
  };
}

export interface LPThirdPartyCheckoutRequest {
  pointsRedeemed: string;
  experienceId: string;
  vhzTransactionId: string;
  cardNo: string;
}

export interface LPAutoRedemptionRequestItem {
  erid: string;
  expiring_points: number;
  expirydate: string;
}

export interface LPAutoRedemptionResponseItem {
  erid: string;
  expiring_points: number;
  expirydate: string;
  mobile: string;
  defaultRedeemType: string; // Default Redeem Type
  canId: string; // CAN ID
  hpbTransactionID: string; // HPBTransactionID
  message: string;
}

export const LPAutoRedemptionResultTypes = {
  SUCCESS: {
    key: "success",
    message: "Success",
    matchRegex: /(success)/i
  },
  BLOCKED_USER: {
    key: "blocked_user",
    message: "Blocked User",
    matchRegex: /(blocked user)/i
  },
  CANCELLED_CARD: {
    key: "cancelled_card",
    message: "Cancelled Card",
    matchRegex: /(cancelled card)/i
  },
  CARD_HAS_EXPIRED: {
    key: "card_has_expired",
    message: "Card has expired",
    matchRegex: /(card has expired)/i
  },
  CARD_NO_NOT_FOUND: {
    key: "card_no_not_found",
    message: "Card No not found",
    matchRegex: /(card no not found)/i
  },
  CARD_NOT_FOUND: {
    key: "card_not_found",
    message: "Card Not found",
    matchRegex: /(card not found)/i
  },
  INVALID_CARD_STATUS: {
    key: "invalid_card_status",
    message: "Invalid Card (Card Status)",
    matchRegex: /(invalid card.*card status.*)/i
  },
  INVALID_CARD_NO: {
    key: "invalid_card_no",
    message: "Invalid Card No (CAN No)",
    matchRegex: /(invalid card no.*can no.*)/i
  },
  INVALID_PARAMETER_TXN_DATE: {
    key: "invalid_parameter",
    message: "Invalid parameter - Txn Date",
    matchRegex: /(invalid parameter.*txn date)/i
  },
  NOT_PROCESSING: {
    key: "not_processing",
    message: "Not Processing",
    matchRegex: /(not processing)/i
  },
};

export interface LPUpdatedTransaction {
  erid: string,
  pphTransactionId: string,
  lpTransactionId: string,
  voucherStatus: string,
  transactionTime: string,
  experienceId: string,
  name: string
}

export interface LPUpdatedTransactionRecord {
  erid: string,
  PPH_TransactionID: string,
  LP_TransactionId: string,
  voucher_status: string,
  transaction_time: string,
  experience_id: string,
  name: string
}


const parseAutoRedemptionResultType = (responseMessage: string): string | undefined => {
  const matchedType = Object.entries(LPAutoRedemptionResultTypes)
    .find(([, value]) => {
      return value.matchRegex.test(responseMessage);
    });
  if (!matchedType) {
    console.log(`Unknown auto-redemption-response message from LP, message: ${responseMessage}`);
    return undefined;
  }
  console.log(matchedType)
  const [, value] = matchedType;
  return value.key;
};

const parseAutoRedeumptionResult = (responseMessage: string): void => {
  const matchType = Object.entries(LPAutoRedemptionResultTypes)
  .findIndex(([key,value]) => {
    // console.log(key);
    // console.log(value);
    return value.matchRegex.test(responseMessage);
  })
  const matchType1 = Object.keys(LPAutoRedemptionResultTypes)
  const matchType2 = Object.values(LPAutoRedemptionResultTypes)
  console.log(matchType);
  // console.log(matchType1);
  // console.log(matchType2);
  
}

console.log(parseAutoRedeumptionResult("dummy"));
console.log(parseAutoRedemptionResultType("success"));