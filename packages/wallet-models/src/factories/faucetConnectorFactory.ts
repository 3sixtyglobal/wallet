// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Factory } from "@3sixty/core";
import type { IFaucetConnector } from "../models/IFaucetConnector.js";

/**
 * Factory for creating faucets.
 */
export const FaucetConnectorFactory = Factory.createFactory<IFaucetConnector>("faucet-connector");
