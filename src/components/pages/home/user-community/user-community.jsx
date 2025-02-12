import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import BellLogo from 'icons/bell.inline.svg';
import CapitalOneLogo from 'icons/capitalone.inline.svg';
import DatadogLogo from 'icons/datadog.inline.svg';
import AdobeLogo from 'icons/logo-adobe.inline.svg';
import AlibabaCloudLogo from 'icons/logo-alibaba-cloud.inline.svg';
import AWSLogo from 'icons/logo-aws.inline.svg';
import CengnLogo from 'icons/logo-cengn.inline.svg';
import DigitalOceanLogo from 'icons/logo-digital-ocean.inline.svg';
import GitlabLogo from 'icons/logo-gitlab.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import MasmovilLogo from 'icons/logo-masmovil.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import WildLifeLogo from 'icons/logo-wild-life.inline.svg';
import SkyLogo from 'icons/sky.inline.svg';

const icons = {
  google: GoogleLogo,
  adobe: AdobeLogo,
  aws: AWSLogo,
  capitalOne: CapitalOneLogo,
  alibabaCloud: AlibabaCloudLogo,
  cengn: CengnLogo,
  digitalOcean: DigitalOceanLogo,
  gitlab: GitlabLogo,
  masmovil: MasmovilLogo,
  trip: TripLogo,
  wildLife: WildLifeLogo,
  bell: BellLogo,
  sky: SkyLogo,
  datadog: DatadogLogo,
};

const UserCommunity = ({ title, items }) => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      {title && (
        <Heading tag="h3" theme="gray">
          {title}
        </Heading>
      )}
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-4 xl:gap-8 lg:mt-8">
        {items.map(({ iconName, text, links }, index) => {
          const Icon = icons[iconName];
          return (
            <div
              className="flex flex-col h-full p-6 border rounded-lg xl:p-8 bg-gray-4 border-gray-3"
              key={index}
            >
              <Icon className="h-12" />
              <p className="mt-5 mb-4">{text}</p>
              <div className="pt-4 mt-auto space-x-6 leading-none border-t border-gray-3">
                {links.map(({ linkUrl, linkText, linkTarget }, index) => (
                  <Link
                    className="relative first:before:hidden before:inline-block before:w-1 before:h-1 before:absolute before:rounded-full before:bg-gray-5 before:top-1/2 before:-translate-y-1/2 before:-left-3.5"
                    key={index}
                    type="text"
                    theme="primary"
                    to={linkUrl}
                    target={linkTarget || ''}
                  >
                    {linkText}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

UserCommunity.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          linkTarget: PropTypes.string,
          linkUrl: PropTypes.string.isRequired,
          linkText: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

UserCommunity.defaultProps = {
  title: null,
};

export default UserCommunity;
