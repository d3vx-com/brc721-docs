---
sidebar_position: 1
---

# Overview

A standard interface to verify the authenticity of bitcoin ordinals collections.

## Motivation

The [Ordinal Theory](https://docs.ordinals.com) does not specify a way to combine items into collections. As a result, different entities have tried to implement their methods. However, these methods are centralized and depend on the particular service or wallet being used, which limits the Ordinal ecosystem and opens up many opportunities for bad actors.

These issues have severely limited the potential of the ecosystem. Therefore, there is a need for a decentralized and trustless method of collection creation and verification.

## Abstract

The protocol introduces both a decentralized and trustless approach to creating collections and enabling a post-reveal mechanism, similar to the [ERC-721](https://eips.ethereum.org/EIPS/eip-721) standard on the Ethereum blockchain.

By providing a single source of truth, it aims to streamline the collection creation and verification process without requiring upfront payments.

The protocol specifies the data structure for collections and their items in the manifest. The manifest and verification rules determine whether an ordinal inscription belongs within a collection.

## Addressed Issues

- Upfront payment on another blockchain
- No metadata standard and reveal mechanic
- No shared specification for the collection or its items
- Trust the collection creator to include your inscription within the collection
