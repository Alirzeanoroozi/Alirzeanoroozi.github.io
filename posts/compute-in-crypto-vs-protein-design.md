---
title: Computation in crypto vs protein design
date: 2026-10-15
summary: Both fields burn enormous amounts of compute, but only one of them is designed so that burning more buys you nothing. The comparison says something uncomfortable about how we spend GPUs on biology.
---

Two fields have spent the last decade turning electricity into a product at industrial scale: cryptocurrency mining and machine learning for structural biology. The numbers are in the same order of magnitude, the hardware came out of the same fabs, and for a while in 2021 they were literally competing for the same GPUs. But the *economics* of that compute are opposite in a way I find clarifying, and the contrast changed how I think about my own work.

## In proof-of-work, the compute is the product

A proof-of-work chain is a machine for converting energy into an ordering of transactions that nobody can cheaply forge. The important design feature is the difficulty adjustment: as more hash power joins, the target gets harder, so the network produces exactly one block per interval no matter how much silicon is pointed at it.

This means the marginal information produced by the marginal hash is, by construction, zero. Doubling the global hash rate does not give you a faster chain, a more expressive chain, or a more accurate chain. It gives you the same chain, defended twice as hard. The compute is not computing anything in the ordinary sense — it is posting a bond.

I am not making the usual environmental argument here. The bond does real work: it is what makes the ledger expensive to rewrite. My point is narrower and stranger. Proof-of-work is one of the only large-scale computations humans run where *we deliberately engineered away* the link between compute spent and knowledge gained. The whole thing is a Red Queen race on purpose.

## In protein design, compute is supposed to buy information

Structural biology is the opposite case. Every GPU-hour is supposed to be an hour of learning something: a structure predicted, a complex cofolded, a trajectory sampled, a library screened. The link between compute and information is the entire premise.

And yet in practice the link is far weaker than the premise suggests, for a reason that has nothing to do with difficulty adjustment and everything to do with how we have chosen to represent molecules.

Cofolding models — AlphaFold3, Boltz, Chai — represent every atom of the system at every layer. A 400-residue protein contributes on the order of three thousand heavy atoms, and attention over that set dominates both training and inference. The representation is applied uniformly: to the hydrophobic core, to a flexible surface loop, and to the binding site alike.

But the information that determines binding is not uniformly distributed. A hydrogen bond geometry three ångström from the ligand decides whether a pose is right. The side-chain rotamer of a solvent-exposed lysine forty ångström away almost never does. We pay full atomic price for an entire structure in order to get a handful of contacts correct.

So we have a field where compute is *meant* to buy information, spending a large fraction of it on regions where there is no information to buy. That is not a difficulty adjustment, but the effect on the margin rhymes with one: you add GPUs and you do not get proportionally more knowledge, because the extra capacity goes to the hydrophobic core.

This is the premise of what I have been working on — that resolution should follow information, with coarse representations for global geometry and atomic detail only where molecular recognition actually happens, and with the model *learning* where to spend detail rather than being told by a distance cutoff. The interesting technical problem is not the hierarchy itself but the selection policy: including an unnecessary residue costs compute, while excluding a necessary one costs correctness, and those two failures are not symmetric.

## The asymmetry crypto has and biology does not

Here is the part of the comparison I keep coming back to, and it is not about cost at all.

Proof-of-work is expensive to produce and trivial to verify. Finding a valid nonce takes the entire network ten minutes; checking one takes a laptop microseconds. That gap — many orders of magnitude between producing and verifying — is what makes the whole system work. It is why a phone can audit a chain that cost a nation's worth of electricity to build. Trust does not require re-running the computation.

Protein design has no such asymmetry. Generating a candidate binder is expensive. Verifying it is *also* expensive — and the expensive part is not GPU time, it is a wet lab, months of calendar time, and a limited number of slots. There is no laptop-microsecond check for "does this peptide actually bind the target selectively in a cell."

What we use instead are cheap proxies: interface pLDDT, predicted aligned error, Rosetta-style energy terms, a single predicted complex. These are our verification layer, and they are weak in a specific way. They score a static structure, so they cannot see induced fit, and they cannot tell you whether a binder stays selective across a conformational ensemble. Worse, they are gameable: pipelines optimised against them tend to produce hydrophobic, promiscuous interfaces that score beautifully in silico and cross-react in cells. A generative model pointed at a weak verifier will find its blind spots, reliably, because that is what optimisation does.

Crypto would call this a broken consensus rule. If your verification function is cheap but wrong, an adversary mints coins out of nothing. In design, the adversary is your own sampler, and what it mints is a library of sticky garbage that passes every filter you own.

## Where I think the leverage is

Put the two observations together and the picture is reasonably clear. The compute problem in biology is not primarily that we do not have enough GPUs. It is that:

1. We spend the compute we have uniformly, over a system where information is concentrated; and
2. We have no cheap, honest verifier, so we cannot tell which of the resulting candidates deserved the compute.

The second is the harder and more valuable one. The whole reason I have been working on evaluating binders with dynamics data rather than single-structure confidence — running an ensemble and asking whether the interface survives it — is that it is an attempt to make verification *better* rather than cheaper. It is not free; molecular dynamics costs real compute. But it costs compute in the one place where spending it changes a decision, which is exactly the trade crypto makes in reverse.

A field with a strong verifier can afford a wasteful generator, because bad candidates get filtered. A field with a weak verifier cannot afford anything, because it has no way to know what it just bought. Right now, every honest person in protein design is in the second situation, and the number of GPUs you own does not move you into the first.

That is the uncomfortable conclusion. The crypto mining rig and the design cluster look identical from the outside — same cards, same power draw, same hum. One of them is running a computation whose marginal value was engineered to zero on purpose. The other is running a computation whose marginal value drifts toward zero by accident, because we have not built the thing that tells us when it has.

The second problem, unlike the first, is fixable.
