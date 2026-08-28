---
title: Simplify ModelOps with Amazon SageMaker AI Projects using Amazon S3-based templates
date: 2026-01-30
permalink: /posts/2026/01/sagemaker-s3-project-templates
excerpt_separator: <!--more-->
toc: true
tags:
  - sagemaker
  - mlops
  - modelops
  - cloudformation
---
Managing ModelOps workflows can be complex and time-consuming. Amazon SageMaker AI Projects now offers an easier path with Amazon S3-based templates. With this new capability, you can store AWS CloudFormation templates directly in Amazon S3 and manage their entire lifecycle using familiar S3 features such as versioning, lifecycle policies, and cross-region replication.

<!--more-->

**Full text [here](https://aws.amazon.com/blogs/machine-learning/simplify-modelops-with-amazon-sagemaker-ai-projects-using-amazon-s3-based-templates/), and GitHub repository [here](https://github.com/aws-samples/sagemaker-custom-project-templates/tree/main/s3_templates)**

This post explores how you can use Amazon S3-based templates to simplify ModelOps workflows, walks through the key benefits compared to using Service Catalog approaches, and demonstrates how to create a custom ModelOps solution that integrates with GitHub and GitHub Actions — giving your team one-click provisioning of a fully functional ML environment.

**Why I wrote this.** Service Catalog was the number-one friction point customers hit when customizing SageMaker Projects — an extra service to learn and govern just to ship a template. S3-based templates remove that dependency, and this post shows the pattern I now recommend by default: templates versioned in S3, provisioning wired to GitHub Actions.
{: .notice--info}
