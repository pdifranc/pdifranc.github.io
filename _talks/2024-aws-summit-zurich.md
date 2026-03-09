---
title: "Accelerate FM pre-training on Amazon SageMaker HyperPod"
collection: talks
type: "Conference"
permalink: /talks/2024-aws-summit-zurich
venue: "AWS Summit Zurich"
date: 2024-09-04
location: "Zurich, Switzerland"
---

Co-presented with Ankit Anand and Matt Nightingale, this session explored the challenges of training foundation models at scale and how Amazon SageMaker HyperPod addresses them. The talk covered the generative AI landscape and the growing computational demands of FM development, from prompt engineering and RAG to full pre-training. We introduced SageMaker HyperPod as a resilient, performant, and customizable environment for large-scale distributed training — featuring self-healing clusters that automatically detect hardware failures, replace faulty instances, and resume training jobs from checkpoints, reducing training time by up to 20%. The session went under the hood of HyperPod, covering cluster architecture, instance groups, lifecycle scripts, Elastic Fabric Adapter (EFA) for high-speed inter-node communication, distributed training software stacks for both GPU and Trainium, and job scheduling with auto-healing. Customer stories from Stability AI, Perplexity AI, and Hugging Face illustrated real-world benefits.
