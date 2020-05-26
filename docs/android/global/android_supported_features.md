---
title: Supported Features
---

<div class="row">
    <div class="col-lg-12">
        <h2 class="page-header">Service List</h2>
    </div>
    <div class="col-md-4">
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-bank fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">HALO Core</h4>
                <p>Contains helper elements to create requests, database tables, instances and much more.</p>
            </div>
        </div>
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-font fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">HALO Translations</h4>
                <p>This library allows the developer to translate the application based on a module stored in HALO.</p>
            </div>
        </div>
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">HALO Two Factor</h4>
                <p>This library allows the developer to use two factor authentication with HALO.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-database fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">HALO Content</h4>
                <p>This library allows the developer to request content to the content module of HALO.</p>
            </div>
        </div>
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-pie-chart fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">HALO Analytics</h4>
                <p>This library allows the developer to send analytic tags and keep track of the user interaction.</p>
            </div>
        </div>
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-support fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">Support</h4>
                <p>Using the github open source project you will get direct support for bug fixes from HALO developers.</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-paper-plane fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">HALO Notifications</h4>
                <p>This library allows the developer to receive notifications and react to them.</p>
            </div>
        </div>
        <div class="media">
            <div class="pull-left">
                <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-share-square-o fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="media-body">
                <h4 class="media-heading">HALO Auth</h4>
                <p>This library allows the developer to login to different social networks to gain APP+ priviledges.</p>
            </div>
        </div>
    </div>
</div>
<br/>

| Library                |   Feature    |    Artifact    |
|---------|-----------------------------|----------------|
| **HALO Core**          |  |         halo-sdk           |
|| Get modules                                          ||
|| Add segmentation tags                                ||
|| Remove segmentation tags                             ||
|| Check Sdk with server version                        ||
|| Authentication                                       ||
|| Device unique id                                     ||
| **HALO Content**       |  |        halo-content        |
|| Search with custom queries                           ||
|| Sync all the instances of a module                   ||
|| Offline content support                              ||
| **HALO Notifications** |  |     halo-notifications     |
|| Receive notifications                                ||
|| Modify the behavior of the notification              ||
|| Listen to different notification types               ||
| **HALO Translations** |   |      halo-translations     |
|| Sync a translations module                           ||
|| Set default translation                              ||
|| Set translation to a TextView asynchronously         ||
| **HALO Analytics** |      |        halo-analytics      |
|| Send custom content                                  ||
|| Support for google analytics                         ||
| **HALO Auth**         |   |         halo-auth         |
|| Built in support for google login                    ||
|| Built in support for facebook login                  ||
|| Built in support for halo login                      ||
|| Halo account registration                            ||
|| Role App+ adquisition to perform upgraded operations ||
| **HALO Two Factor**   |   |      halo-twofactor       |
|| Built in support for confirmation via sms provider   ||
|| Built in support for confirmation via push provider  ||
| **HALO Presenter** |      |        halo-presenter      |
|| Helpers for MVP pattern using HALO                   ||