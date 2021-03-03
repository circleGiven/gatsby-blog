import { graphql, Link, StaticQuery } from 'gatsby';
import { Icon } from 'rsuite';
import React from 'react';
import { css } from '@emotion/react';
import { FixedObject } from 'gatsby-image';

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

export const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
          childImageSharp {
            fixed(quality: 100 width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data: SiteNavLogoProps) => (
      <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
        <Icon icon="terminal" stack="1x" inverse />
      </Link>

    )}
  />
);

const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }
`;

