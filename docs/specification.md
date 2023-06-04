---
sidebar_position: 4
---

# Specification

The protocol is based on three types of manifests. Each manifest has protocol and version fields allowing third-party services to understand the specification.

## Collection Manifest

   The CollectionManifest is the source of truth for the collection. It stores the collection parameters and fields that allow linking and validation of the underlying collection items.

```json
protocol
  name: "BRC721"
  version: string

name: string
symbol: string
type: "collection"
paymentAddress: string
signerPublicKey: string

maxSupply?: number
maxPerAddress?: number
maxBlockHeight?: number
```

## Inscription Manifest

   The InscriptionManifest is an Ordinal inscription linked to the CollectionManifest. Similar to an NFT and how it relates to the Ethereum blockchain contract.

```json
protocol
  name: "BRC721"
  version: string

type: "inscription"
contentSignature: string

content: JSON string
  price?: number
  initialOwnerAddress?: string
  collectionInscriptionId: string
```

## Reveal Manifest

   The RevealManifest allows linking the metadata to the specific CollectionManifest, which grants properties to the InscriptionManifests.
  
   Like the ERC-721 tokenURI method, each InscriptionManifest gets an internal ordinal number in the collection starting from 1. The assigned number is based on the transactions and inscription order.
  
   The RevealManifest does not define the exact metadata schema but implies using the [official metadata standard for ERC721](https://docs.opensea.io/docs/metadata-standards#metadata-structure).

```json
protocol
  name: "BRC721"
  version: string

type: "reveal"
contentSignature: string

content: JSON string
  weight: number
  metadataURL: string
  collectionInscriptionId: string
```

## Declaration

Each manifest and manifest content key value is a JSON string that must be valid against the declared [json-schema.org Draft 4](https://json-schema.org) to prevent inconsistency.

- [CollectionManifest.schema.json](/schemas/CollectionManifest.schema.json)
- [InscriptionManifest.schema.json](/schemas/InscriptionManifest.schema.json)
- [InscriptionManifest.content.schema.json](/schemas/InscriptionManifest.content.schema.json)
- [RevealManifest.schema.json](/schemas/RevealManifest.schema.json)
- [RevealManifest.content.schema.json](/schemas/RevealManifest.content.schema.json)

To validate schemas, use one of the proposed validators: [https://json-schema.org/implementations.html#validators](https://json-schema.org/implementations.html#validators).

## Signatures and Hashing

To ensure secure linking of the manifests, the protocol utilizes:

- ECDSA secp256k1 for signing and verifying the SHA256 hash of the inscription content.
- DER-encoded signature as hex-string
- Compressed/uncompressed signerPublicKey as hex-string

## Collection Manifest Verification

To verify the CollectionManifest, the underlying conditions **must** be met:

1. CollectionManifest must be valid against the corresponding json schema

## Inscription Manifest Verification

To ensure that an InscriptionManifest is a part of the collection, the underlying conditions **must** be met:

1. InscriptionManifest must be valid against the corresponding json schema
2. InscriptionManifest.protocol.version is equal to CollectionManifest.protocol.version
3. InscriptionManifest.content.collectionInscriptionId is equal to CollectionManifest's inscription id
4. InscriptionManifest.contentSignature is verifiable with CollectionManifest.signerPublicKey and InscriptionManifest.content string
5. If InscriptionManifest.content.price exists and is greater than 0, the inscription transaction includes a spendable output(s) for CollectionManifest.paymentAddress with a total value more or equal to InscriptionManifest.content.price
6. If CollectionManifest.maxBlockHeight exists and is greater than 0, then InscriptionManifest's transaction block height is less or equal to the specified value
7. If CollectionManifest.maxSupply exists and is greater than 0, then InscriptionManifest number is less or equal to the specified value. The order of the transactions in the blocks defines the InscriptionManifest number.
8. If InscriptionManifest.content.initialOwnerAddress exists, then InscriptionManifest's first output is spendable by the same address to ensure that initialOwnerAddress is the initial recipient of the inscription
9. If CollectionManifest.maxPerAddress exists and is greater than 0, then the total number of verified InscriptionManifests is less or equal to CollectionManifest.maxPerAddress on a single address

## Reveal Manifest Verification

To ensure that a RevealManifest is a part of the collection, the underlying conditions **must** be met:

1. RevealManifest must be valid against the corresponding json schema
2. RevealManifest.protocol.version is equal to CollectionManifest.protocol.version
3. RevealManifest.contentSignature is verifiable with CollectionManifest.signerPublicKey and RevealManifest.content string
4. RevealManifest.content.collectionInscriptionId is equal to CollectionManifest's inscription id
5. The last RevealManifest inscription if more than one exists to update the metadata
6. RevealManifest.content.weight is greater than corresponding CollectionManifest's previous RevealManifest weight



