---
title: Organize your machine learning journey with Amazon SageMaker Experiments and Amazon SageMaker Pipelines
date: 2022-07-21
permalink: /posts/2022/07/sagemaker-experiments-pipelines
excerpt_separator: <!--more-->
toc: true
tags:
  - sagemaker
  - mlops
  - pipelines
  - experiments
---
The process of building a machine learning (ML) model is iterative until you find the candidate model that is performing well and is ready to be deployed. As data scientists iterate through that process, they need a reliable method to easily track experiments to understand how each model version was built and how it performed.

<!--more-->

**Full text [here](https://aws.amazon.com/blogs/machine-learning/organize-your-machine-learning-journey-with-amazon-sagemaker-experiments-and-amazon-sagemaker-pipelines/), and GitHub repository [here](https://github.com/aws-samples/sagemaker-experiments-and-pipelines)**

In this post, we take a closer look at the motivation behind having an automated process to track experiments with Amazon SageMaker Experiments and the native capabilities built into Amazon SageMaker Pipelines. We show how the native integration between Pipelines and Experiments allows data scientists to automatically organize, track, and visualize experiments during model development activities.

**2026 update.** SageMaker Experiments has since been superseded by [managed MLflow on Amazon SageMaker AI](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow.html), which integrates with SageMaker Pipelines as the tracking layer. The principle this post argues for — every pipeline execution tracked automatically, no tracking left to discipline — is unchanged.
{: .notice--info}
