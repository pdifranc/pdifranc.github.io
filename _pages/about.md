---
permalink: /
title: "About me"
excerpt: "Paolo Di Francesco — Senior Solutions Architect at AWS, focused on MLOps, Generative AI, and Agentic AI. Speaker, lecturer, and open-source contributor."
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
      <a href="/posts/" class="btn btn--outline btn--large">Read My Blog</a>
    </div>
  </div>
</div>

I am a Senior Solutions Architect at [Amazon Web Services (AWS)](https://aws.amazon.com/) in Vienna, Austria. I help customers design and run cloud-based systems with a focus on Machine Learning Operations (MLOps), DevOps, and Generative AI. My current interest is **Agentic AI** — how foundation models, tool use, and orchestration are reshaping the way we build software and architect systems on the cloud.

<div class="focus-grid">
  <div class="focus-card">
    <div class="focus-card__icon"><i class="fas fa-cube"></i></div>
    <h3 class="focus-card__title">Build</h3>
    <p class="focus-card__body">Designing cloud architectures and ML systems with AWS customers — from startups to enterprises — across MLOps, DevOps, and Generative AI.</p>
    <a class="focus-card__link focus-card__link--stretched" href="/experience/">Experience &rarr;</a>
  </div>
  <div class="focus-card">
    <div class="focus-card__icon"><i class="fas fa-chalkboard-teacher"></i></div>
    <h3 class="focus-card__title">Teach</h3>
    <p class="focus-card__body">External lecturer at <a class="focus-card__inline" href="https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=192035">TU Wien</a> on AI &amp; Generative AI, plus public workshops used by AWS field teams worldwide.</p>
    <a class="focus-card__link focus-card__link--stretched" href="/teaching/">Teaching &rarr;</a>
  </div>
  <div class="focus-card">
    <div class="focus-card__icon"><i class="fas fa-pen-nib"></i></div>
    <h3 class="focus-card__title">Write &amp; Speak</h3>
    <p class="focus-card__body">7 posts on the <a class="focus-card__inline" href="https://aws.amazon.com/blogs/machine-learning/author/frpaolo/">AWS ML Blog</a> (54K+ views) and talks at AWS Summits, Cloud Days, and meetups across Europe.</p>
    <a class="focus-card__link focus-card__link--stretched" href="/posts/">Blog &rarr;</a>
  </div>
</div>

## Open Source

Selected upstream contributions and workshops I've authored or co-authored. Stars are live.

<div class="oss-grid">
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">mlflow/mlflow</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/mlflow/mlflow?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Added AWS SigV4 request signing to the MLflow client via <code>MLFLOW_TRACKING_AWS_SIGV4</code>, enabling MLflow tracking servers to sit behind Amazon API Gateway with IAM authentication.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/mlflow/mlflow/pull/7044" aria-label="View PR on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">mlflow/mlflow</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/mlflow/mlflow?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Unblocked <code>mlflow sagemaker build-and-push-container</code> in SageMaker JupyterLab: added a <code>--network</code> flag for the restricted <code>sagemaker</code> network, plus a Docker CLI fallback for environments where the Python SDK can't reach the proxy socket.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/mlflow/mlflow/pull/22996" aria-label="View PR on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws/sagemaker-python-sdk</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/aws/sagemaker-python-sdk?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Added an example notebook demonstrating Inference Pipelines in SageMaker V3, using <code>ModelBuilder</code> and the new <code>sagemaker.core</code> components.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/aws/sagemaker-python-sdk/pull/5525" aria-label="View PR on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/amazon-sagemaker-from-idea-to-production</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/aws-samples/amazon-sagemaker-from-idea-to-production?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Workshop: <a class="oss-card__inline" href="https://catalog.workshops.aws/mlops-from-idea-to-production">MLOps from idea to production in six steps</a>. Used by AWS field teams worldwide.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/amazon-sagemaker-from-idea-to-production" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/amazon-sagemaker-immersion-day</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/aws-samples/amazon-sagemaker-immersion-day?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Workshop: <a class="oss-card__inline" href="https://sagemaker-immersionday.workshop.aws/">Amazon SageMaker Immersion Day</a>. Delivered to thousands of customers.</p>
    <span class="oss-card__tag">Co-author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/amazon-sagemaker-immersion-day" aria-label="View repo on GitHub"></a>
  </div>
</div>

## Background

Before joining AWS in 2020, I spent four years at [RadarServices](https://www.radarservices.com/) in Vienna, where I progressed from Software Developer to Development Team Leader to Software Engineer & Architect, working on cloud-based IT security monitoring products. Earlier in my career, I was a Postdoctoral Researcher and Data Analyst at [Trinity College Dublin](https://www.tcd.ie/), where I also earned my Ph.D. in Electronic & Electrical Engineering.

My academic work has been [published](/publications/) in *IEEE Transactions on Computers*, *IEEE Transactions on Big Data*, *IEEE/ACM Transactions on Networking*, and *IEEE Transactions on Cognitive Communications and Networking*, among other venues.
