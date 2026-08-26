---
permalink: /
title: "AWS Solutions Architect · MLflow Contributor · MLOps & Agentic AI"
excerpt: "Paolo Di Francesco — Senior Solutions Architect at AWS in Vienna and MLflow contributor. Open-source ML tools on SageMaker, MLOps, and agentic AI."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
hero: true
hide_title: true
---

<div class="hero-section">
  <canvas id="particle-canvas"></canvas>
  <div class="hero-content">
    <p class="hero-greeting">Hi, I'm</p>
    <h1 class="hero-name">Paolo Di Francesco</h1>
    <p class="hero-tagline">
      <span class="typewriter" id="typewriter"></span><span class="typewriter-cursor">|</span>
    </p>
    <div class="hero-cta">
      <a href="/experience/" class="btn btn--primary btn--large">My Experience</a>
      <a href="/posts/" class="btn btn--outline btn--large">Read My Writing</a>
    </div>
  </div>
</div>

I like open-source ML tools, and I like them working where the work actually happens. Most of what I've built as a Senior Solutions Architect at [AWS](https://aws.amazon.com/) in Vienna comes from that: getting [MLflow](https://github.com/mlflow/mlflow) and [DVC](https://dvc.org/) to run properly on Amazon SageMaker, with the access control, lineage, and versioning production demands.

One went further than expected. Open-source MLflow had no access control and enterprises needed it, so I [built it on AWS-native services](/posts/2023/05/secure-mlflow-aws) and [contributed the client-side SigV4 signing upstream](https://github.com/mlflow/mlflow/pull/7044) to MLflow. The SageMaker service team picked up the thread: the SigV4 work led to the [sagemaker-mlflow plugin](https://github.com/aws/sagemaker-mlflow) that handles authentication in managed MLflow today, and I ended up in the design discussions for what became [managed MLflow on SageMaker AI](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow.html).

These days the same instinct points at **agentic AI**: my current project is a [re-imagined developer portal](/experience/) — describe your application, and an agent bootstraps the infrastructure to best practices.

<div class="focus-grid">
  <div class="focus-card">
    <div class="focus-card__icon"><i class="fas fa-cube"></i></div>
    <h3 class="focus-card__title">Build</h3>
    <p class="focus-card__body">Production ML with AWS customers — architecture reviews, proofs of concept, and multi-day hackathons. When the blocker turns out to be the tooling, the fix goes upstream.</p>
    <a class="focus-card__link focus-card__link--stretched" href="/experience/">Experience &rarr;</a>
  </div>
  <div class="focus-card">
    <div class="focus-card__icon"><i class="fas fa-chalkboard-teacher"></i></div>
    <h3 class="focus-card__title">Teach</h3>
    <p class="focus-card__body">External lecturer at <a class="focus-card__inline" href="https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=192035">TU Wien</a> on AI &amp; Generative AI, and author of public workshops that AWS field teams run worldwide.</p>
    <a class="focus-card__link focus-card__link--stretched" href="/talks/">Speaking &amp; Teaching &rarr;</a>
  </div>
  <div class="focus-card">
    <div class="focus-card__icon"><i class="fas fa-pen-nib"></i></div>
    <h3 class="focus-card__title">Write &amp; Speak</h3>
    <p class="focus-card__body">8 posts on the <a class="focus-card__inline" href="https://aws.amazon.com/blogs/machine-learning/author/frpaolo/">AWS ML Blog</a> and talks at AWS Summits, Cloud Days, and meetups across Europe.</p>
    <a class="focus-card__link focus-card__link--stretched" href="/posts/">Writing &rarr;</a>
  </div>
</div>

## Open Source

Merged pull requests in [MLflow](https://github.com/mlflow/mlflow) (SigV4 authentication, SageMaker container builds) and the [SageMaker Python SDK](https://github.com/aws/sagemaker-python-sdk), plus two public workshops delivered to thousands of customers. Every one of them started as a real problem in a customer engagement.

<a href="/opensource/" class="btn btn--primary">Contributions &amp; workshops &rarr;</a>

## Background

Before AWS I spent four years at [RadarServices](https://www.radarservices.com/), a Vienna cybersecurity company, going from developer to team lead to architect on a cloud-based security monitoring product. Before that I was a researcher: a Ph.D. at [Trinity College Dublin](https://www.tcd.ie/), a year analyzing nationwide cellular traffic data with O2 Ireland, and [papers](/publications/) in *IEEE Transactions on Computers*, *Big Data*, and *Networking*. The common thread, in hindsight, is distributed systems and data — I've just kept moving up the stack.

## Get in touch

Want to talk MLOps, agentic AI, or invite me to speak at your event? The best way to reach me is [LinkedIn](https://www.linkedin.com/in/paolo-di-francesco); for anything open-source, open an issue or find me on [GitHub](https://github.com/pdifranc).

<a href="https://www.linkedin.com/in/paolo-di-francesco" class="btn btn--primary">Connect on LinkedIn</a>
