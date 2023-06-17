---
sidebar_position: 1
---

# Overview

A standard interface to verify the authenticity of Bitcoin Ordinals collections.

## Motivation

The [Ordinal Theory](https://docs.ordinals.com) does not define a method for combining items into collections, leading various entities to devise their own approaches. However, these methods are centralized and heavily dependent on a specific service or wallet in use. This not only limits the potential of the Ordinal ecosystem but also creates loopholes that bad actors can potentially exploit.

These problems significantly constrain the ecosystem's potential, highlighting the need for a decentralized, trustless method for creating and verifying collections.

## Abstract

The protocol introduces both a decentralized and trustless approach to creating collections and enabling a post-reveal mechanism, similar to the [ERC-721](https://eips.ethereum.org/EIPS/eip-721) standard on the Ethereum blockchain.

By serving as a single source of truth, this protocol aims to simplify the process of creating and verifying collections without the need for upfront payments.

The protocol outlines the data structure for collections, including their individual items, within the manifest. Utilising this manifest and the established verification rules, it can be determined if an ordinal inscription genuinely belongs within a given collection.

## Addressed Issues

- Eliminates the need for upfront payment on another blockchain
- Introduces a metadata standard and reveal mechanic
- Provides a shared specification for the collection and its items
- Reduces the need to trust the collection creator to include your inscription within the collection
