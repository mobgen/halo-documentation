/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="80"
                height="60"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('cms/cms_home')}>
              CMS Documentation
            </a>
            <a href={this.docUrl('android/android_home')}>
              Getting started with Android
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Getting started with iOS
            </a>
            <a href={this.docUrl('android/server_integrations_home')}>
              Server integrations
            </a>
            <a target="_blank" href={"https://web-halo.mobgen.com/api/docs/"}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/mobgen"
               target="_blank">GitHub</a>
            <a
              className="github-button"
              href={"https://github.com/mobgen/halo-android"}
              target="_blank"
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star Android SDK
            </a>
            <div/>
            <a
                className="github-button"
                href={"https://github.com/mobgen/halo-ios"}
                target="_blank"
                data-icon="octicon-star"
                data-count-href="/facebook/docusaurus/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub">
              Star iOS SDK
            </a>
            <div/>
            <a
                className="github-button"
                href={"https://github.com/mobgen/halo-documentation"}
                target="_blank"
                data-icon="octicon-star"
                data-count-href="/facebook/docusaurus/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub">
              Star Documentation
            </a>
          </div>
        </section>

        <a
          href="https://mobgen.com"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/mobgen_logo.png`}
            alt="MOBGEN | Accenture Interactive"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
