---
title: Create a Generative AI Gateway to allow secure and compliant consumption of foundation models
date: 2023-09-28
permalink: /posts/2023/09/genai-gateway
excerpt_separator: <!--more-->
toc: true
tags:
  - generative-ai
  - bedrock
  - architecture
  - security
---
Every team in the enterprise wants to try foundation models. Nobody wants ten teams each wiring up their own model access, cost tracking, and compliance controls — and the security office wants that even less. In this post, we propose a Generative AI Gateway: one governed entry point through which the whole organization consumes foundation models, so teams can move fast without each of them re-solving privacy, cost, and compliance from scratch.

<!--more-->

**Full text [here](https://aws.amazon.com/blogs/machine-learning/create-a-generative-ai-gateway-to-allow-secure-and-compliant-consumption-of-foundation-models/)**

**What happened since.** When we wrote this in 2023, "LLM gateway" wasn't yet a category — it has since become a standard enterprise pattern, with a whole ecosystem of open-source and commercial gateways implementing the same core ideas: one governed entry point, centralized cost attribution, and compliance controls decoupled from the consuming teams. The architecture reasoning here still holds; the build-vs-buy answer has shifted.
{: .notice--info}
