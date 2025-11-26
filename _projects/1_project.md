---
layout: page
title: Parantiprot
description: protein language model project with background image
img: assets/img/parantiprot-cover.jpg
importance: 1
category: work
related_publications: true
---

Parantiprot is a research project on **protein sequence modeling** using deep learning.
This page gives a visual overview of the pipeline, datasets, and key results, using the
flexible 3-column grid layout.

You can highlight experimental setups, architecture diagrams, and result plots as 1/3, 2/3,
or full-width images, depending on how much emphasis you want to give them.

To give your project a background in the portfolio page, just add the `img` tag to the
front matter like so:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/parantiprot-architecture.jpg" title="Model architecture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/parantiprot-dataset.jpg" title="Dataset and preprocessing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/parantiprot-training.jpg" title="Training pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, an overview of the Parantiprot model architecture. Middle, a schematic of
    the protein datasets and preprocessing steps. Right, the end-to-end training and
    evaluation pipeline.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/parantiprot-results.jpg" title="Quantitative results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Summary of benchmark performance compared to baseline protein models.
</div>
