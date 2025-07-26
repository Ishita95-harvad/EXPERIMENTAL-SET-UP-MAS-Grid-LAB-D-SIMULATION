# Systematic Reviews & Meta-Analyses (SR & MA) Protocol

## Introduction to SR & MA
This SR & MA aims to evaluate the effectiveness of AI-driven multi-agent systems for energy efficiency in smart grids, focusing on renewable integration and waste reduction. The review synthesizes global studies, with a sub-analysis for India’s solar landscape.

## Database Building and Protocol Design
- **Databases**: PubMed, IEEE Xplore, Scopus, and Google Scholar.
- **Search Terms**: “multi-agent systems,” “reinforcement learning,” “smart grids,” “energy efficiency,” “renewable integration,” “India solar.”
- **Inclusion Criteria**:
  - Peer-reviewed articles (2015–2025).
  - Studies using AI (e.g., MARL, optimization) for smart grids.
  - Quantitative outcomes (e.g., energy waste, renewable integration).
- **Exclusion Criteria**:
  - Non-AI methods or non-smart grid applications.
  - Qualitative studies or reviews without primary data.
- **Protocol**:
  - **PRISMA Framework**: For transparent reporting.
  - **Screening**: Two reviewers independently screen titles/abstracts, resolving conflicts via discussion.
  - **Data Extraction**: Study design, AI method, metrics, outcomes, and India-specific findings.

## Statistical Methods & Interpretation
- **Effect Size**: Standardized mean difference (SMD) for energy waste reduction and renewable integration.
- **Heterogeneity**: I² statistic to assess variability (I² > 50% indicates high heterogeneity).
- **Meta-Analysis Model**: Random-effects model if I² > 50%, otherwise fixed-effects.
- **Subgroup Analysis**: India-specific studies vs. global studies.
- **Publication Bias**: Funnel plot and Egger’s test.
- **Software**: R package `meta` for analysis.

## Figure and Table Preparation for Publication
- **Figure**: Forest plot showing SMD for energy waste reduction across studies, with subgroups for India.
- **Table**: Summary of included studies (author, year, AI method, outcomes, effect size).
- **Format**: High-resolution PNG for figures, LaTeX-compatible tables.

## Tools for Meta-Analysis
- **R**: Packages `meta`, `metafor` for effect size calculation and visualization.
- **RevMan**: For additional forest plot generation.
- **EndNote**: For reference management.
- **PRISMA Checklist**: Ensures compliance with reporting standards.