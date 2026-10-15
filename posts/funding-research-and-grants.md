---
title: Funding, research, and grants
date: 2026-10-15
summary: Nobody teaches you how research gets paid for. Some notes on what money actually buys, why grant proposals read the way they do, and what I got wrong about all of it.
---

When I started my bachelor's I assumed research funding worked roughly like a scholarship: you are good, someone notices, money arrives. Six years, two countries, one fellowship I never got to use, and a fair amount of GPU begging later, I have a more accurate picture. This is the post I wish someone had written for me at twenty.

## Money is not the unit. Time and compute are.

The first thing to understand is that a grant is almost never a transfer of cash to a researcher. It is a purchase order for specific things, and the categories are rigid.

What research money mostly buys, in rough order of size:

- **People.** Salaries for PhD students, postdocs, and technicians. In most labs this is 60–80% of a grant. A proposal that asks for two postdocs over four years has written its real content already, whatever the abstract says.
- **Compute.** Either as cash for cloud credits, or — more often in academia — as an allocation on a national or institutional cluster, applied for separately and denominated in GPU-hours rather than currency.
- **Wet-lab costs.** Reagents, synthesis, sequencing, instrument time. In computational work this is the line that decides whether your designs ever get tested, and it is the line most easily cut.
- **Travel.** Conferences, collaborations. Small in absolute terms, disproportionate in effect on a junior career.
- **Overhead.** A percentage — often 20–50% — that goes to the institution, not the project. This is not corruption; it pays for buildings and electricity. But it means a €1M grant is not €1M of science.

Noticing that people are the dominant cost explains a lot of otherwise baffling academic behaviour. A professor is not primarily managing a research agenda; they are managing a payroll with a two-to-five-year horizon and no guarantee of renewal. Every strategic decision they make that seems overly conservative to a student makes sense once you see the payroll.

## The shapes funding comes in

Roughly, from the perspective of someone at my stage:

**Fellowships that follow a person.** You apply, you win, the money is attached to you and you take it to an institution. These are the best kind to hold because they buy independence: a funded student is not a cost to a lab, which changes the conversation entirely. Vector, Presidential fellowships, Marie Curie, DAAD, most national scholarship schemes.

**Project grants that follow an idea.** A PI writes a proposal, a panel scores it, a lab gets funded for three to five years to do a specific thing. ERC, ANR, NSF, TÜBİTAK, Horizon Europe. These dominate how European labs actually run.

**Institutional and core funding.** The baseline a university or institute gets for existing. Invisible until it is cut.

**Industry money.** Collaborations, sponsored projects, internships. Faster, less paperwork, usually with strings — publication delays, IP terms, or a problem choice that is not quite yours. Not inherently worse, but you should know which of those you are trading.

**Compute allocations.** A separate currency with its own application cycle. Many groups are cash-poor and GPU-rich, or the reverse, and the two are not fungible on any useful timescale.

**Prizes and challenges.** Modest money, outsized signal. Submitting to an open challenge is one of the few ways a student with no track record can produce a legible, externally-scored result. This is a large part of why I keep entering them.

## Why proposals read the way they do

Grant prose has a reputation for being inflated, and the reputation is earned, but the inflation is structural rather than dishonest.

A proposal has to do three incompatible things at once. It must be *ambitious* enough to be worth funding — panels do not fund incremental work, and saying "we will carefully characterise a known effect" is a rejection. It must be *feasible* enough to be credible, which usually means the work is at least a third done before it is proposed. And it must be *novel*, which rewards framing your continuation of five years of work as a new departure.

The honest way to satisfy all three is to propose the next step of something you have already started, describe it in terms of the question it answers rather than the increment it adds, and be concrete about the failure modes. Reviewers are not fooled by confidence; they are reassured by a proposal that names what could go wrong and says what it would do instead. The single most useful sentence in a research statement is usually some version of "here is the specific way this could fail, and here is how I would know."

The dishonest way is to promise the moon and deliver the paper you were writing anyway, which is common enough that panels have adapted, which raises the required ambition, which increases the inflation. It is a Red Queen race, and complaining about it does not get you out of running.

## The part nobody puts on a CV

Funding decisions are not only about research quality, and pretending otherwise leaves you unprepared.

In 2024 I was awarded a Vector Scholarship for MSc entrance at York University. I never started, because the visa did not come through in time. The money was real, the admission was real, the work was ready, and none of that mattered against an administrative timeline I had no influence over. I ended up doing my MSc at Koç, which has been good for me in ways I could not have planned — but it was not a decision, it was an outcome.

I mention it because the lesson generalises beyond my case. Funding is contingent on geography, timing, citizenship, exchange rates, which panel read your file on which afternoon, and whether a programme happened to have an unspent budget line that quarter. A lot of what looks like merit sorting, viewed up close, is logistics.

The practical consequence is not cynicism. It is that you should apply to more things than feel necessary, keep each application cheap by reusing a strong core document, and never let a single outcome be load-bearing for your plans. Decouple what you work on from what you are funded for, as far as you can, so that losing a funding line costs you resources rather than a research direction.

## What funding does to what gets studied

Worth saying plainly: money shapes the field's attention, and not always toward the most important problems.

Generation is easier to fund than evaluation. A proposal to design novel binders against a disease target tells a clean story to a panel; a proposal to find out whether existing design pipelines are actually measuring what they claim does not, even though the second may be worth more. Benchmarks, negative results, careful replication, and honest failure analysis are chronically underfunded relative to their value, because they are hard to narrate as a breakthrough.

Short grant cycles push toward work that finishes in two years. Wet-lab validation does not reliably finish in two years, which is part of why so much computational design work stops at in-silico metrics. The incentive and the science point in different directions, and the incentive usually wins.

I do not have a fix. But knowing the distortion exists is enough to make better local choices: to spend some fraction of your own effort on the unfundable-but-valuable thing, to be suspicious when a whole subfield converges on a metric, and to notice when you are optimising for a panel rather than for a result.

## If you are earlier than me

A short list, offered without much confidence:

1. **Apply before you feel ready.** The cost of a rejection is a few days; the cost of not applying is a year.
2. **Write one strong research statement and keep it alive.** Most applications are re-skins of it. Mine has been rewritten perhaps a dozen times and each version was easier than the last.
3. **Ask people what their funding actually is.** Most researchers will tell you, in detail, if you ask directly. It is the fastest education available and it is free.
4. **Treat compute as a thing you apply for**, not a thing you hope your lab has.
5. **Keep receipts on your own work.** Preprints, code, posters, challenge submissions. Panels fund legible track records, and legibility is something you can build deliberately, early, at low cost.
6. **Separate your identity from your funding status.** You will lose competitions you deserved to win, for reasons that have nothing to do with you.

None of this makes the system fair. It does make it navigable, which is the most that is on offer.
