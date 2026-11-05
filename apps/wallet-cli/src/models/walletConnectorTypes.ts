// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The wallet connector types.
 */
export const WalletConnectorTypes = {
	/**
	 * IOTA.
	 */
	Iota: "iota"
} as const;

/**
 * The wallet connector types.
 */
export type WalletConnectorTypes = (typeof WalletConnectorTypes)[keyof typeof WalletConnectorTypes];
