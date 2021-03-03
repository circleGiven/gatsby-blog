import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import { List } from "rsuite";
import map from "lodash/map";

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;
const referenceList = [];

const Reference: React.FC = () => (

  <IndexLayout>
    <Helmet>
      <title>Reference</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">Reference</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h2>Front End</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo finibus leo,
                  non tempus magna vehicula ac. Maecenas mollis ante finibus pharetra imperdiet.
                  Maecenas in aliquam purus. Nam et massa a nulla fermentum dapibus sit amet in
                  neque. Ut ipsum ipsum, rhoncus a sodales pellentesque, interdum a elit. Nullam
                  aliquam tellus nibh, eget laoreet dui aliquet non. Vestibulum malesuada ante at
                  diam tempus, ac interdum risus scelerisque. Sed ipsum neque, vulputate porta diam
                  eget, consequat blandit nulla. Integer volutpat velit vitae purus lacinia aliquam.
                  Integer bibendum ipsum vitae magna pulvinar, nec vehicula dolor vulputate. Nulla
                  eu massa id orci placerat finibus vel sit amet eros. Vestibulum quis consequat
                  massa. Sed sagittis sollicitudin massa at commodo. Praesent diam nisi, imperdiet
                  posuere eleifend nec, blandit ac massa.
                </p>
                <List>
                  {map(referenceList, (item, index) => (
                    <List.Item key={index} index={index}>
                      {item}
                    </List.Item>
                  ))}
                </List>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Reference;
