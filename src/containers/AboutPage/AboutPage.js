import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './eric-nopanen-3skLpaOBlMw-unsplash (1).jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Yogatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Revolutionising unused spaces across Australia</h1>
          <img className={css.coverImage} src={image} alt="Private pool party listing." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Private spaces for your own slice of paradise, at the click of a button.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                How it all started
              </h2>

              <p>
                Splash out is a Sydney based start-up that was brought to life following the switch up from country living to a life in Sydney.
              </p>
              <p>After making the move, it didn’t take long for our O.G. Splash Out numero uno, Seb, to come to come to the realisation that when the sun comes out in Sydney, everyone wants to escape their home and go to the nearest beach / park / recreational space.
              </p>
              <p>After a few years spent living in the big smoke, he quickly realised how the best experiences and spaces were inevitably shared with hundreds or thousands of others, because they were in such high demand.
              </p>
              <p>If you wanted to have a more intimate experience, your options were to get there before everyone else or suck it up and hope for the best. 
              </p>
              <p>This brought to life the inspiration behind Splash Out.</p>

              <h2>Our why</h2>

              <p>
                In the same way that Airbnb solved the problem of an under supply of unique accommodation spaces, Splash Out has been built as the equivalent, but for spaces.
              </p>
              <p>We wanted to solve the problem for people who want to make memories in their own personal space, even if it’s only for a few hours.
              </p>
              <p>Even better, it serves as a source of income for owners of private spaces that are being under utilised and could be better used by the community.
              </p>


              <h2>
                Safe Spaces For All
              </h2>
              <p>
                Splash Out has been created with inclusivity at its core. And we believe that each space should be a safe space for all.
              </p>
              <p>
                Whether you’re renting the space for a kid’s birthday party or a corporate celebration,we work with our hosts to ensure you feel confident in choosing a space that is right for you.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
